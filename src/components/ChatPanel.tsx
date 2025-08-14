// src/components/ChatPanel.tsx
import { useState, useRef, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import PromptInput from "./PromptInput";
import type { Message } from "@/types";

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Create home page for my site!",
      isUser: true,
      timestamp: new Date(Date.now() - 360000),
    },
    {
      id: "2",
      text: "I'll create a modern, engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.\n\nLet me build something that captures attention with dynamic visuals and clear value propositions.",
      isUser: false,
      timestamp: new Date(Date.now() - 300000),
    },
    {
      id: "3",
      text: "Additional prompt for AI here",
      isUser: true,
      timestamp: new Date(Date.now() - 240000),
    },
    {
      id: "4",
      text: "Engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.",
      isUser: false,
      timestamp: new Date(Date.now() - 180000),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full h-screen bg-[#795DFC]/5  border-gray-200 flex flex-col">
      <ChatHeader />

      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-4 flex flex-col justify-end min-h-full">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Prompt input */}
      <PromptInput onSendMessage={handleSendMessage} isLoading={isLoading} />
    </div>
  );
}
