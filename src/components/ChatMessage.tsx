import React from 'react';
import { MessageSquare, Bot } from 'lucide-react';
import { Message } from '../types/chat';
import { clsx } from 'clsx';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div
      className={clsx(
        'flex items-start gap-3 p-4 rounded-lg',
        isUser ? 'bg-blue-50' : 'bg-gray-50'
      )}
    >
      <div className={clsx(
        'w-8 h-8 rounded-full flex items-center justify-center',
        isUser ? 'bg-blue-500' : 'bg-gray-700'
      )}>
        {isUser ? (
          <MessageSquare className="w-4 h-4 text-white" />
        ) : (
          <Bot className="w-4 h-4 text-white" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {isUser ? 'You' : 'AI Assistant'}
        </p>
        <p className="mt-1 text-sm text-gray-700">{message.content}</p>
        <p className="mt-1 text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};