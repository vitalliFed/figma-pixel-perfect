import type { Message } from "@/types";

export interface MessageAvatarProps {
  isVisible: boolean;
}

export interface MessageBubbleProps {
  text: string;
  isUser: boolean;
}

export interface MessageLayoutProps {
  isUser: boolean;
  children: React.ReactNode;
}

export interface MessageContainerProps {
  message: Message;
}
