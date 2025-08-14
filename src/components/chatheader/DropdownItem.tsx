import type { DropdownItemProps } from "@/types/chatheader";

export default function DropdownItem({
  icon: Icon,
  text,
  onClick,
}: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center font-manrope text-[#141C25] w-full p-2 font-normal text-sm leading-5 tracking-normal cursor-pointer rounded-lg hover:bg-[#F2F4F7] hover:font-medium transition-all duration-150"
    >
      <div className="w-5 h-5 flex items-center justify-center mr-1.5">
        <Icon />
      </div>
      {text}
    </button>
  );
}
