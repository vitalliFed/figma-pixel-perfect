import { useState } from "react";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import Settings from "@/assets/icons/settings.svg";
import ChevronUp from "@/assets/icons/nav-arrow-up.svg";

export default function ChatHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative m-2 font-intel">
      <div className="w-fit bg-white border border-gray-200 rounded-[10px]">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center text-[#000000] cursor-pointer"
        >
          <span className="font-manrope pl-[10px] py-2 font-medium text-xs leading-none tracking-[-0.01em]">
            cognism.page/get-started
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

      {isDropdownOpen && (
        <div className="w-[211px] bg-white rounded-[10px] absolute top-9 left-0 z-10 p-2 shadow-[0px_10px_15px_-3px_rgba(20,28,37,0.08)] border border-gray-100">
          <div className="space-y-0.5">
            <button className="flex items-center font-manrope text-[#141C25] w-full p-2 font-normal text-sm leading-5 tracking-normal cursor-pointer rounded-lg hover:bg-[#F2F4F7] hover:font-medium transition-all duration-150">
              <div className="w-5 h-5 flex items-center justify-center mr-1.5">
                <ArrowLeft />
              </div>
              Back to Dynamic Pages
            </button>

            <button className="flex items-center font-manrope text-[#141C25]  w-full p-2 font-normal text-sm leading-5 tracking-normal cursor-pointer rounded-lg hover:bg-[#F2F4F7] hover:font-medium transition-all duration-150">
              <div className="w-5 h-5 flex items-center justify-center mr-1.5">
                <Settings />
              </div>
              Page Settings
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
