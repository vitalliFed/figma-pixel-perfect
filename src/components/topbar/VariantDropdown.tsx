import NavArrowUp from "@/assets/icons/nav-arrow-up.svg";
import type { VariantDropdownProps } from "@/types/topbar";

export default function VariantDropdown({
  isOpen,
  selectedVariant,
  variants,
  onToggle,
  onSelectVariant,
}: VariantDropdownProps) {
  return (
    <div className="relative ml-3">
      <button
        onClick={onToggle}
        className="flex items-center justify-between rounded-md hover:bg-gray-100 transition-colors w-[174px] h-8 pl-3 pr-[14px] border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)]"
      >
        <span className="text-gray-700 font-normal text-[13px] leading-[100%] tracking-[-0.01em]">
          {selectedVariant}
        </span>
        <div
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <NavArrowUp />
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-lg z-50 w-[174px] border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] p-2">
          {variants.map((variant, index) => (
            <button
              key={index}
              onClick={() => onSelectVariant(variant)}
              className="w-full text-left text-gray-700 hover:bg-[#F2F4F7] rounded transition-colors h-[30px] px-2 py-[5px] font-normal text-[13px] leading-[100%] tracking-[-0.01em]"
            >
              {variant}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
