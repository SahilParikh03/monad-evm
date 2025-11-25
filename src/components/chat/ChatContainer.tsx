import { useEffect, useRef } from 'react';
import { useChat } from '../../contexts/ChatContext';
import Message from './Message';
import TypingIndicator from './TypingIndicator';
import ChatInput from './ChatInput';

const ChatContainer = () => {
  const { chats, currentChatId, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const currentChat = chats.find(chat => chat.id === currentChatId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [currentChat?.messages, isTyping]);

  return (
    <div className="flex-1 flex flex-col h-full">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {!currentChat || currentChat.messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-matrix-purple">
                  Chat with Nadia
                </h2>
                <p className="text-gray-400">
                  Ask me anything about Monad blockchain technology
                </p>
              </div>
            </div>
          ) : (
            <>
              {currentChat.messages.map(message => (
                <Message key={message.id} message={message} />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>

      {/* Input Area */}
      <ChatInput />
    </div>
  );
};

export default ChatContainer;
