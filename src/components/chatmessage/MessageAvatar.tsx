import AIChat from "@/assets/icons/ai-chat.svg";
import type { MessageAvatarProps } from "@/types/chatmessage";

export default function MessageAvatar({ isVisible }: MessageAvatarProps) {
  if (!isVisible) return null;

  return (
    <div className="mr-2 flex-shrink-0 pt-1">
      <AIChat />
    </div>
  );
}
