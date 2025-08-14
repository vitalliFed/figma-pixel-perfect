import { type ChangeEvent } from "react";
import type { AutoResizeTextareaProps } from "@/types/promptinput";

export default function AutoResizeTextarea({
  value,
  onChange,
  onKeyDown,
  placeholder,
  disabled,
  textareaRef,
}: AutoResizeTextareaProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (disabled) return;
    onChange(e.target.value);
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        className="w-full min-h-[35px] max-h-[150px] p-2 bg-transparent resize-none focus:outline-none overflow-y-auto"
        rows={1}
        disabled={disabled}
      />
    </div>
  );
}
