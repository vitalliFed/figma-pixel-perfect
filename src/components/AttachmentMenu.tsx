// src/components/AttachmentMenu.tsx
import { Button } from "./ui/button";
import Plus from "@/assets/icons/plus.svg";
import Globe from "@/assets/icons/globe.svg";
import MultiPage from "@/assets/icons/multiple-pages-add.svg";
import Link from "@/assets/icons/link.svg";

interface AttachmentMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function AttachmentMenu({
  isOpen,
  onToggle,
}: AttachmentMenuProps) {
  return (
    <div className="relative">
      {isOpen && (
        <div className="absolute bottom-0 left-9 bg-white rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(20,28,37,0.08)] border border-[#F2F4F7] p-2 w-[179px] h-32 z-10">
          <div className="flex flex-col space-y-0.5">
            <button className="flex items-center space-x-[10px] px-1 py-2 rounded-lg hover:bg-[#F2F4F7] text-sm text-[#141C25] w-full text-left font-normal hover:font-medium transition-all duration-150 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <MultiPage />
              </div>
              <span>Add photos & files</span>
            </button>

            <button className="flex items-center space-x-[10px] px-1 py-2 rounded-lg hover:bg-[#F2F4F7] text-sm text-[#141C25] w-full text-left font-normal hover:font-medium transition-all duration-150 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <Globe />
              </div>
              <span>Link</span>
            </button>

            <button className="flex items-center space-x-[10px] px-1 py-2 rounded-lg hover:bg-[#F2F4F7] text-sm text-[#141C25] w-full text-left font-normal hover:font-medium transition-all duration-150 cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <Link />
              </div>
              <span>Select campaign</span>
            </button>
          </div>
        </div>
      )}

      <Button
        onClick={onToggle}
        className="w-8 h-8 hover:bg-[#F2F4F7] rounded-r-[8px] bg-[#F2F4F7] text-[#F2F4F7] cursor-pointer"
      >
        <Plus />
      </Button>
    </div>
  );
}
