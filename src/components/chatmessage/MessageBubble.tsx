import type { MessageBubbleProps } from "@/types/chatmessage";
import {
  formatMessageText,
  getMessageBubbleStyles,
} from "@/utils/messageUtils";

export default function MessageBubble({ text, isUser }: MessageBubbleProps) {
  const bubbleStyles = getMessageBubbleStyles(isUser);
  const formattedText = formatMessageText(text);

  return (
    <div className={`max-w-[444px] text-sm leading-5 ${bubbleStyles}`}>
      {formattedText}
    </div>
  );
}
