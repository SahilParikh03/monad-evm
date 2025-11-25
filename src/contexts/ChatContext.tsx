import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Chat, Message, ChatContextType } from '../types';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date(),
    };
    setChats([newChat, ...chats]);
    setCurrentChatId(newChat.id);
  };

  const switchChat = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  const sendMessage = (content: string) => {
    if (!currentChatId) {
      // Create a new chat if none exists
      createNewChat();
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    // Add user message
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, userMessage],
              title: chat.messages.length === 0 ? content.slice(0, 30) + '...' : chat.title,
            }
          : chat
      )
    );

    // Call webhook to get AI response
    setIsTyping(true);

    const webhookUrl = 'https://tatianna.app.n8n.cloud/webhook-test/54a59d2f-1384-4e98-aaad-5d8decd115b2';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: content,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response - support multiple formats
        const aiContent = data.response || data.message || data.text || JSON.stringify(data);

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: aiContent,
          role: 'assistant',
          timestamp: new Date(),
        };

        setChats(prevChats =>
          prevChats.map(chat =>
            chat.id === currentChatId
              ? { ...chat, messages: [...chat.messages, aiMessage] }
              : chat
          )
        );
        setIsTyping(false);
      })
      .catch(error => {
        console.error('Error calling webhook:', error);

        // Show error message to user
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: 'Sorry, I encountered an error connecting to the AI service. Please try again.',
          role: 'assistant',
          timestamp: new Date(),
        };

        setChats(prevChats =>
          prevChats.map(chat =>
            chat.id === currentChatId
              ? { ...chat, messages: [...chat.messages, errorMessage] }
              : chat
          )
        );
        setIsTyping(false);
      });
  };

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChatId,
        createNewChat,
        switchChat,
        sendMessage,
        isTyping,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
