import type { Message } from "@/types";

export interface MessagesAreaProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
}

export interface ChatControlsProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

export interface ChatLayoutProps {
  children: React.ReactNode;
}

export interface MockDataConfig {
  messages: Message[];
}
