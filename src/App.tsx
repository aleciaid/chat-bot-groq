import React from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatWindow } from './components/ChatWindow';
import { useChat } from './hooks/useChat';

function App() {
  const { chatState, sendMessage } = useChat();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <ChatHeader />
        <ChatWindow 
          chatState={chatState}
          onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;