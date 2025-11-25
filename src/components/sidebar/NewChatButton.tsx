import { Plus } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';

const NewChatButton = () => {
  const { createNewChat } = useChat();

  return (
    <button
      onClick={createNewChat}
      className="w-full flex items-center gap-3 px-4 py-3 bg-matrix-purple-dark hover:bg-matrix-purple transition-all duration-300 rounded-lg font-semibold hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
    >
      <Plus size={20} />
      <span>NEW CHAT</span>
    </button>
  );
};

export default NewChatButton;
