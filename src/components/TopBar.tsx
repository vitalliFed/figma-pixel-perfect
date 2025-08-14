import { useState } from "react";
import Switch from "@/assets/icons/Switch.svg";
import Keyframes from "@/assets/icons/Keyframes.svg";
import DesignNib from "@/assets/icons/design-nib.svg";
import Computer from "@/assets/icons/computer.svg";
import Pen from "@/assets/icons/pen-tablet.svg";
import SmartPhone from "@/assets/icons/smartphone-device.svg";
import UndoLeft from "@/assets/icons/undo.svg";
import UndoRight from "@/assets/icons/undoRight.svg";
import NavArrowUp from "@/assets/icons/nav-arrow-up.svg";

type DeviceType = "desktop" | "tablet" | "mobile";

export default function TopBar() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");
  const [isVariantDropdownOpen, setIsVariantDropdownOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("Variant 3");

  const variants = ["Variant 1", "Variant 2", "Variant 3", "Variant 3"];

  const handleDeviceSelect = (device: DeviceType) => {
    setSelectedDevice(device);
  };

  return (
    <div className="h-8 bg-white rounded-lg m-2 flex items-center justify-between">
      {/* Left side - Design tools */}
      <div className="flex items-center">
        <button className="pl-[6px] pr-1.5 py-1.5 rounded hover:bg-gray-100 transition-colors">
          <Switch />
        </button>

        {/* Border separator */}
        <div className="w-px h-6 bg-[#E4E7EC] ml-3 mr-3"></div>

        <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
          <Keyframes />
        </button>

        <button className="p-1.5 rounded hover:bg-gray-100 transition-colors">
          <DesignNib />
        </button>

        {/* Variant dropdown */}
        <div className="relative ml-3">
          <button
            onClick={() => setIsVariantDropdownOpen(!isVariantDropdownOpen)}
            className="flex items-center justify-between rounded-md hover:bg-gray-100 transition-colors w-[174px] h-8 pl-3 pr-[14px] border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)]"
          >
            <span className="text-gray-700 font-normal text-[13px] leading-[100%] tracking-[-0.01em]">
              {selectedVariant}
            </span>
            <div
              className={`transition-transform duration-200 ${
                isVariantDropdownOpen ? "rotate-180" : ""
              }`}
            >
              <NavArrowUp />
            </div>
          </button>

          {isVariantDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-lg z-50 w-[174px] border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] p-2">
              {variants.map((variant, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setIsVariantDropdownOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:bg-[#F2F4F7] rounded transition-colors h-[30px] px-2 py-[5px] font-normal text-[13px] leading-[100%] tracking-[-0.01em]"
                >
                  {variant}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center - Device selector */}
      <div className="flex items-center rounded-md gap-1 w-[108px] bg-[#F2F4F7] p-[2px]">
        <button
          onClick={() => handleDeviceSelect("desktop")}
          className={`rounded-lg transition-colors py-1.5 px-2 ${
            selectedDevice === "desktop"
              ? "bg-white shadow-[0px_1px_3px_0px_rgba(52,64,81,0.17)]"
              : "hover:bg-white/50"
          }`}
        >
          <Computer />
        </button>

        <button
          onClick={() => handleDeviceSelect("tablet")}
          className={`rounded-lg transition-colors py-1.5 px-2 ${
            selectedDevice === "tablet"
              ? "bg-white shadow-[0px_1px_3px_0px_rgba(52,64,81,0.17)]"
              : "hover:bg-white/50"
          }`}
        >
          <Pen />
        </button>

        <button
          onClick={() => handleDeviceSelect("mobile")}
          className={`rounded-lg transition-colors py-1.5 px-2 ${
            selectedDevice === "mobile"
              ? "bg-white shadow-[0px_1px_3px_0px_rgba(52,64,81,0.17)]"
              : "hover:bg-white/50"
          }`}
        >
          <SmartPhone />
        </button>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-1">
        {/* Undo/Redo container */}
        <div className="flex items-center bg-white w-16 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] rounded-lg p-0">
          <button className="p-1.5 rounded hover:bg-gray-100 transition-colors flex-1 flex justify-center">
            <UndoLeft />
          </button>

          {/* Separator line */}
          <div className="w-px h-4 bg-[#E4E7EC]"></div>

          <button className="p-1.5 rounded hover:bg-gray-100 transition-colors flex-1 flex justify-center">
            <UndoRight />
          </button>
        </div>

        {/* Action buttons */}
        <button className="hover:bg-gray-100 transition-colors ml-2 py-2 px-3 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] rounded-lg text-[#141C25] font-medium text-[13px] leading-[100%] tracking-[-0.01em]">
          Discard
        </button>

        <button className="hover:opacity-90 transition-opacity ml-2 py-2 px-3 bg-[#795DFC] rounded-lg text-white font-medium text-[13px] leading-[100%] tracking-[-0.01em]">
          Save
        </button>
      </div>
    </div>
  );
}
