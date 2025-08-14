import MenuItem from "./MenuItem";
import type { MenuDropdownProps } from "@/types/attachmentmenu";

export default function MenuDropdown({
  isOpen,
  items,
  onItemClick,
}: MenuDropdownProps) {
  if (!isOpen) return null;

  const handleItemClick = (action: string) => {
    onItemClick?.(action);
  };

  return (
    <div className="absolute bottom-0 left-9 bg-white rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(20,28,37,0.08)] border border-[#F2F4F7] p-2 w-[179px] h-32 z-10">
      <div className="flex flex-col space-y-0.5">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            text={item.text}
            onClick={() => handleItemClick(item.action)}
          />
        ))}
      </div>
    </div>
  );
}
