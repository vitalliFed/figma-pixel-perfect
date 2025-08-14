import { Button } from "../ui/button";
import Plus from "@/assets/icons/plus.svg";
import type { MenuTriggerProps } from "@/types/attachmentmenu";

export default function MenuTrigger({ onClick }: MenuTriggerProps) {
  return (
    <Button
      onClick={onClick}
      className="w-8 h-8 hover:bg-[#F2F4F7] rounded-r-[8px] bg-[#F2F4F7] text-[#F2F4F7] cursor-pointer"
    >
      <Plus />
    </Button>
  );
}
