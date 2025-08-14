import MenuDropdown from "./MenuDropdown";
import MenuTrigger from "./MenuTrigger";
import { attachmentMenuItems } from "@/data/attachmentMenuItems";
import type { AttachmentMenuContainerProps } from "@/types/attachmentmenu";

export default function AttachmentMenuContainer({
  isOpen,
  onToggle,
  onItemClick,
}: AttachmentMenuContainerProps) {
  const handleItemClick = (action: string) => {
    // Handle different attachment actions
    switch (action) {
      case "add_files":
        console.log("Adding files...");
        // Trigger file picker or upload logic
        break;
      case "add_link":
        console.log("Adding link...");
        // Show link input dialog
        break;
      case "select_campaign":
        console.log("Selecting campaign...");
        // Show campaign selector
        break;
      default:
        console.log("Unknown action:", action);
    }

    // Call external handler if provided
    onItemClick?.(action);

    // Close menu after action
    onToggle();
  };

  return (
    <div className="relative">
      <MenuDropdown
        isOpen={isOpen}
        items={attachmentMenuItems}
        onItemClick={handleItemClick}
      />

      <MenuTrigger onClick={onToggle} />
    </div>
  );
}
