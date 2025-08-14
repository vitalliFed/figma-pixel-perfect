import type { ChatLayoutProps } from "@/types/chatpanel";

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="w-full h-screen bg-[#795DFC]/5 border-gray-200 flex flex-col">
      {children}
    </div>
  );
}
