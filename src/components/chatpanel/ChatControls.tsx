import type { ChatControlsProps } from "@/types/chatpanel";
import PromptInput from "../promptinput/PromptInput";

export default function ChatControls({
  onSendMessage,
  isLoading,
}: ChatControlsProps) {
  return <PromptInput onSendMessage={onSendMessage} isLoading={isLoading} />;
}
