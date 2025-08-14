import { Button } from "../ui/button";
import Micro from "@/assets/icons/micro.svg";
import Send from "@/assets/icons/send.svg";
import type { InputControlsProps } from "@/types/promptinput";
import AttachmentMenu from "../attachmentmenu/AttachmentMenu";

export default function InputControls({
  onAttachmentToggle,
  onMicroClick,
  onSendClick,
  isAttachmentMenuOpen,
  isLoading,
  canSend,
}: InputControlsProps) {
  return (
    <div className="flex items-center justify-between pt-1">
      <div className="flex-shrink-0">
        <AttachmentMenu
          isOpen={isAttachmentMenuOpen && !isLoading}
          onToggle={() => !isLoading && onAttachmentToggle()}
        />
      </div>

      <div className="flex items-center gap-5">
        <button
          onClick={onMicroClick}
          disabled={isLoading}
          className="disabled:opacity-50"
        >
          <Micro />
        </button>

        <Button
          type="submit"
          disabled={!canSend || isLoading}
          onClick={onSendClick}
          className={`w-10 h-10 ${isLoading ? "bg-gray-400" : "bg-[#795DFC]"}`}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
}
