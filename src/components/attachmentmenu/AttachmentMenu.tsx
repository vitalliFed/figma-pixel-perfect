import AttachmentMenuContainer from "./AttachmentMenuContainer";
import type { AttachmentMenuContainerProps } from "@/types/attachmentmenu";

export default function AttachmentMenu({
  isOpen,
  onToggle,
  onItemClick,
}: AttachmentMenuContainerProps) {
  return (
    <AttachmentMenuContainer
      isOpen={isOpen}
      onToggle={onToggle}
      onItemClick={onItemClick}
    />
  );
}
