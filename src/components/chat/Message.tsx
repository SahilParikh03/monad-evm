import { User, Bot } from 'lucide-react';
import type { Message as MessageType } from '../../types';

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-matrix-purple-dark flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)]">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-[70%] px-4 py-3 rounded-2xl ${
          isUser
            ? 'bg-matrix-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
            : 'bg-gray-900/50 text-gray-100 border border-gray-800'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        <p className="text-xs mt-2 opacity-60">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>

      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center border border-matrix-purple">
          <User size={18} />
        </div>
      )}
    </div>
  );
};

export default Message;
