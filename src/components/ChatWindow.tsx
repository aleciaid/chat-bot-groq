import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { ChatState } from '../types/chat';

interface ChatWindowProps {
  chatState: ChatState;
  onSendMessage: (message: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ chatState, onSendMessage }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="space-y-4 mb-4 max-h-[60vh] overflow-y-auto">
        {chatState.messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p>Start a conversation by sending a message!</p>
          </div>
        ) : (
          chatState.messages.map(message => (
            <ChatMessage key={message.id} message={message} />
          ))
        )}
        {chatState.isLoading && (
          <div className="text-center text-gray-500">
            <p>AI is thinking...</p>
          </div>
        )}
        {chatState.error && (
          <div className="text-center text-red-500">
            <p>{chatState.error}</p>
          </div>
        )}
      </div>

      <ChatInput
        onSendMessage={onSendMessage}
        disabled={chatState.isLoading}
      />
    </div>
  );
};