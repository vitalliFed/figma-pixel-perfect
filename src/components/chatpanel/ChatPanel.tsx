import ChatHeader from "../chatheader/ChatHeader";
import ChatLayout from "./ChatLayout";
import MessagesArea from "./MessagesArea";
import ChatControls from "./ChatControls";
import { useChatMessages } from "@/hooks/useChatMessages";
import { mockMessages } from "@/data/mockMessages";

export default function ChatPanel() {
  const { messages, isLoading, messagesEndRef, handleSendMessage } =
    useChatMessages(mockMessages);

  return (
    <ChatLayout>
      <ChatHeader />

      <MessagesArea messages={messages} messagesEndRef={messagesEndRef} />

      <ChatControls onSendMessage={handleSendMessage} isLoading={isLoading} />
    </ChatLayout>
  );
}
