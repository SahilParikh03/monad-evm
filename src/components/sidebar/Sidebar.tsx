import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NewChatButton from './NewChatButton';
import ChatHistory from './ChatHistory';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-matrix-purple rounded-lg flex items-center justify-center shadow-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative
          w-64 bg-black/80 backdrop-blur-sm border-r border-gray-800/50
          flex flex-col h-full z-40
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="p-4 border-b border-gray-800/50">
          <h1 className="text-xl font-bold text-matrix-purple mb-4">Nadia16Z</h1>
          <NewChatButton />
        </div>
        <ChatHistory />
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
