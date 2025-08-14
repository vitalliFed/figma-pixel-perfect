export interface AutoResizeTextareaProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  disabled: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
}

export interface InputControlsProps {
  onAttachmentToggle: () => void;
  onMicroClick: () => void;
  onSendClick: () => void;
  isAttachmentMenuOpen: boolean;
  isLoading: boolean;
  canSend: boolean;
}

export interface PromptInputLayoutProps {
  children: React.ReactNode;
}

export interface PromptInputContainerProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}
