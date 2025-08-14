import { useState } from "react";
import DesignTools from "./DesignTools";
import VariantDropdown from "./VariantDropdown";
import DeviceSelector from "./DeviceSelector";
import UndoRedoButtons from "./UndoRedoButtons";
import ActionButtons from "./ActionButtons";
import type { DeviceType } from "@/types/topbar";

export default function TopBar() {
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");
  const [isVariantDropdownOpen, setIsVariantDropdownOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("Variant 3");

  const variants = ["Variant 1", "Variant 2", "Variant 3", "Variant 3"];

  const handleDeviceSelect = (device: DeviceType) => {
    setSelectedDevice(device);
  };

  const handleVariantSelect = (variant: string) => {
    setSelectedVariant(variant);
    setIsVariantDropdownOpen(false);
  };

  return (
    <div className="h-8 bg-white rounded-lg m-2 flex items-center justify-between">
      {/* Left side - Design tools */}
      <div className="flex items-center">
        <DesignTools />

        <VariantDropdown
          isOpen={isVariantDropdownOpen}
          selectedVariant={selectedVariant}
          variants={variants}
          onToggle={() => setIsVariantDropdownOpen(!isVariantDropdownOpen)}
          onSelectVariant={handleVariantSelect}
        />
      </div>

      {/* Center - Device selector */}
      <DeviceSelector
        selectedDevice={selectedDevice}
        onDeviceSelect={handleDeviceSelect}
      />

      {/* Right side - Action buttons */}
      <div className="flex items-center gap-1">
        <UndoRedoButtons />
        <ActionButtons />
      </div>
    </div>
  );
}
