import type { MessageLayoutProps } from "@/types/chatmessage";
import { getMessageAlignment } from "@/utils/messageUtils";

export default function MessageLayout({
  isUser,
  children,
}: MessageLayoutProps) {
  const alignmentClass = getMessageAlignment(isUser);

  return <div className={`flex ${alignmentClass} mb-4`}>{children}</div>;
}
