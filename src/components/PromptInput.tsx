// src/components/PromptInput.tsx
import { useState, useRef, type ChangeEvent } from "react";
import { Button } from "./ui/button";
import AttachmentMenu from "./AttachmentMenu";
import Micro from "@/assets/icons/micro.svg";
import Send from "@/assets/icons/send.svg";

interface PromptInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

export default function PromptInput({
  onSendMessage,
  isLoading = false,
}: PromptInputProps) {
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage("");
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (isLoading) return;

    setMessage(e.target.value);

    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (isLoading) return;

    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="min-h-[107px] bg-white p-2 m-2 rounded-[20px]">
      <div>
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={
            isLoading
              ? "Waiting for response..."
              : "Let's keep going – what's next?"
          }
          className="w-full min-h-[35px] max-h-[150px] p-2 bg-transparent resize-none focus:outline-none overflow-y-auto"
          rows={1}
          disabled={isLoading}
        />
      </div>

      <div className="flex items-center justify-between pt-1">
        <div className="flex-shrink-0">
          <AttachmentMenu
            isOpen={isMenuOpen && !isLoading}
            onToggle={() => !isLoading && setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <div className="flex items-center gap-5">
          <Micro />

          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            onClick={handleSubmit}
            className={`w-10 h-10 ${
              isLoading ? "bg-gray-400" : "bg-[#795DFC]"
            }`}
          >
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}
