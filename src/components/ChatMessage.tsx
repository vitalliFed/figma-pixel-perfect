// src/components/ChatMessage.tsx

import type { Message } from "@/types";
import AIChat from "@/assets/icons/ai-chat.svg";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={`flex ${
        message.isUser ? "justify-end" : "justify-start items-start"
      } mb-4`}
    >
      {!message.isUser && (
        <div className="mr-2 flex-shrink-0 pt-1">
          <AIChat />
        </div>
      )}

      <div
        className={`max-w-[444px] text-sm leading-5 ${
          message.isUser
            ? "bg-white text-[#141C25] rounded-xl px-4 py-3 border border-gray-100"
            : "bg-transparent text-[#141C25] px-2"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
