import AutoResizeTextarea from "./AutoResizeTextarea";
import InputControls from "./InputControls";
import PromptInputLayout from "./PromptInputLayout";
import { usePromptInput } from "@/hooks/usePromptInput";
import type { PromptInputContainerProps } from "@/types/promptinput";

export default function PromptInputContainer({
  onSendMessage,
  isLoading = false,
}: PromptInputContainerProps) {
  const {
    message,
    isMenuOpen,
    textareaRef,
    handleInputChange,
    handleSubmit,
    resetInput,
    toggleMenu,
  } = usePromptInput();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    const trimmedMessage = handleSubmit();
    if (trimmedMessage) {
      onSendMessage(trimmedMessage);
      resetInput();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isLoading) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleFormSubmit(e);
    }
  };

  const handleSendClick = () => {
    if (isLoading) return;

    const trimmedMessage = handleSubmit();
    if (trimmedMessage) {
      onSendMessage(trimmedMessage);
      resetInput();
    }
  };

  const handleMicroClick = () => {
    if (isLoading) return;
    // Handle voice recording functionality
    console.log("Voice recording clicked");
  };

  const getPlaceholder = () => {
    return isLoading
      ? "Waiting for response..."
      : "Let's keep going – what's next?";
  };

  const canSend = message.trim().length > 0;

  return (
    <PromptInputLayout>
      <AutoResizeTextarea
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={getPlaceholder()}
        disabled={isLoading}
        textareaRef={textareaRef}
      />

      <InputControls
        onAttachmentToggle={toggleMenu}
        onMicroClick={handleMicroClick}
        onSendClick={handleSendClick}
        isAttachmentMenuOpen={isMenuOpen}
        isLoading={isLoading}
        canSend={canSend}
      />
    </PromptInputLayout>
  );
}
