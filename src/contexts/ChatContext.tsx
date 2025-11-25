import { createContext, useContext, useState, ReactNode } from 'react';
import { Chat, Message, ChatContextType } from '../types';

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

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `This is a simulated response about Monad blockchain. In production, this would connect to your LLM backend specializing in Monad blockchain technology.`,
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
    }, 1500);
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
