import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Settings from "@/assets/icons/settings.svg";
import DropdownItem from "./DropdownItem";
import type { DropdownMenuProps } from "@/types/chatheader";

export default function DropdownMenu({ isOpen, onClose }: DropdownMenuProps) {
  if (!isOpen) return null;

  const menuItems = [
    {
      icon: ArrowLeft,
      text: "Back to Dynamic Pages",
      onClick: () => {
        // Handle back to dynamic pages
        onClose();
      },
    },
    {
      icon: Settings,
      text: "Page Settings",
      onClick: () => {
        // Handle page settings
        onClose();
      },
    },
  ];

  return (
    <div className="w-[211px] bg-white rounded-[10px] absolute top-9 left-0 z-10 p-2 shadow-[0px_10px_15px_-3px_rgba(20,28,37,0.08)] border border-gray-100">
      <div className="space-y-0.5">
        {menuItems.map((item, index) => (
          <DropdownItem
            key={index}
            icon={item.icon}
            text={item.text}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
}
