import { MessageSquare } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

const ChatHistory = () => {
  const { chats, currentChatId, switchChat } = useChat();

  return (
    <div className="flex-1 overflow-y-auto">
      <h3 className="px-4 py-3 text-sm font-semibold text-gray-400 uppercase tracking-wider">
        CHAT HISTORY
      </h3>
      <div className="space-y-2 px-2">
        {chats.length === 0 ? (
          <p className="px-4 py-3 text-sm text-gray-500 text-center">
            No chats yet. Start a new conversation!
          </p>
        ) : (
          chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => switchChat(chat.id)}
              className={`w-full flex items-start gap-3 px-3 py-3 rounded-lg transition-all duration-300 text-left ${
                currentChatId === chat.id
                  ? 'bg-matrix-purple-dark text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                  : 'text-gray-400 hover:bg-gray-900 hover:text-white'
              }`}
            >
              <MessageSquare size={18} className="flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{chat.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {chat.messages.length} messages
                </p>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
