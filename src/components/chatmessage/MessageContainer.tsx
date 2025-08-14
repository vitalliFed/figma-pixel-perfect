import MessageLayout from "./MessageLayout";
import MessageAvatar from "./MessageAvatar";
import MessageBubble from "./MessageBubble";
import type { MessageContainerProps } from "@/types/chatmessage";

export default function MessageContainer({ message }: MessageContainerProps) {
  const showAvatar = !message.isUser;

  return (
    <MessageLayout isUser={message.isUser}>
      <MessageAvatar isVisible={showAvatar} />
      <MessageBubble text={message.text} isUser={message.isUser} />
    </MessageLayout>
  );
}
