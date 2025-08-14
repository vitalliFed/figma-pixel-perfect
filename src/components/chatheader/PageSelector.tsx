import ChevronUp from "@/assets/icons/nav-arrow-up.svg";
import type { PageSelectorProps } from "@/types/chatheader";

export default function PageSelector({
  pageUrl,
  isDropdownOpen,
  onToggleDropdown,
}: PageSelectorProps) {
  return (
    <div className="w-fit bg-white border border-gray-200 rounded-[10px]">
      <button
        onClick={onToggleDropdown}
        className="flex items-center text-[#000000] cursor-pointer"
      >
        <span className="font-manrope pl-[10px] py-2 font-medium text-xs leading-none tracking-[-0.01em]">
          {pageUrl}
        </span>
        <div className="py-2 pr-2 pl-[6px]">
          <div className="w-4 h-4 flex items-center justify-center">
            <div
              className={`transition-transform duration-200 ${
                isDropdownOpen ? "rotate-0" : "rotate-180"
              }`}
            >
              <ChevronUp />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
