import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center gap-2">
        <MessageCircle className="w-6 h-6 text-blue-500" />
        <h1 className="text-xl font-semibold">AI Chat Assistant</h1>
      </div>
    </div>
  );
};