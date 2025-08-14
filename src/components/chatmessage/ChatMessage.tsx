import MessageContainer from "./MessageContainer";
import type { Message } from "@/types";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return <MessageContainer message={message} />;
}
