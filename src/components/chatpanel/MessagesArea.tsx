import type { MessagesAreaProps } from "@/types/chatpanel";
import ChatMessage from "../chatmessage/ChatMessage";

export default function MessagesArea({
  messages,
  messagesEndRef,
}: MessagesAreaProps) {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="p-2 space-y-4 flex flex-col justify-end min-h-full">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
