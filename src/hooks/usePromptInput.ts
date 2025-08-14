import { useState, useRef } from "react";

export function usePromptInput() {
  const [message, setMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (value: string) => {
    setMessage(value);

    // Auto-resize logic
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
    }
  };

  const handleSubmit = () => {
    if (message.trim()) {
      return message.trim();
    }
    return null;
  };

  const resetInput = () => {
    setMessage("");
    setIsMenuOpen(false);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {
    message,
    isMenuOpen,
    textareaRef,
    handleInputChange,
    handleSubmit,
    resetInput,
    toggleMenu,
  };
}
