export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export interface ChatContextType {
  chats: Chat[];
  currentChatId: string | null;
  createNewChat: () => void;
  switchChat: (chatId: string) => void;
  sendMessage: (content: string) => void;
  isTyping: boolean;
}
