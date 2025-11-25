import { useState, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

const ChatInput = () => {
  const [input, setInput] = useState('');
  const { sendMessage, isTyping } = useChat();

  const handleSend = () => {
    if (input.trim() && !isTyping) {
      sendMessage(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto flex gap-3 items-end">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Monad blockchain..."
          disabled={isTyping}
          className="flex-1 bg-gray-900/50 border border-gray-700 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-matrix-purple resize-none max-h-32 transition-all disabled:opacity-50"
          rows={1}
          style={{
            minHeight: '48px',
            height: 'auto',
          }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="flex-shrink-0 w-12 h-12 bg-matrix-purple hover:bg-matrix-purple-dark rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
