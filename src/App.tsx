import { ChatProvider } from './contexts/ChatContext';
import MatrixRain from './components/common/MatrixRain';
import SocialLinks from './components/common/SocialLinks';
import Sidebar from './components/sidebar/Sidebar';
import ChatContainer from './components/chat/ChatContainer';

function App() {
  return (
    <ChatProvider>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Matrix Rain Background */}
        <MatrixRain />

        {/* Social Links */}
        <SocialLinks />

        {/* Main Layout */}
        <div className="relative z-10 flex h-full">
          {/* Sidebar */}
          <Sidebar />

          {/* Chat Area */}
          <ChatContainer />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
