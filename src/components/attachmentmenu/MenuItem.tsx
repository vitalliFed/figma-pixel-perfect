import type { MenuItemProps } from "@/types/attachmentmenu";

export default function MenuItem({ icon: Icon, text, onClick }: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-[10px] px-1 py-2 rounded-lg hover:bg-[#F2F4F7] text-sm text-[#141C25] w-full text-left font-normal hover:font-medium transition-all duration-150 cursor-pointer"
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        <Icon />
      </div>
      <span>{text}</span>
    </button>
  );
}
