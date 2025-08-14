import Computer from "@/assets/icons/computer.svg";
import Pen from "@/assets/icons/pen-tablet.svg";
import SmartPhone from "@/assets/icons/smartphone-device.svg";
import type { DeviceSelectorProps, DeviceType } from "@/types/topbar";

export default function DeviceSelector({
  selectedDevice,
  onDeviceSelect,
}: DeviceSelectorProps) {
  const devices: { type: DeviceType; icon: typeof Computer }[] = [
    { type: "desktop", icon: Computer },
    { type: "tablet", icon: Pen },
    { type: "mobile", icon: SmartPhone },
  ];

  return (
    <div className="flex items-center rounded-md gap-1 w-[108px] bg-[#F2F4F7] p-[2px]">
      {devices.map(({ type, icon: Icon }) => (
        <button
          key={type}
          onClick={() => onDeviceSelect(type)}
          className={`rounded-lg transition-colors py-1.5 px-2 ${
            selectedDevice === type
              ? "bg-white shadow-[0px_1px_3px_0px_rgba(52,64,81,0.17)]"
              : "hover:bg-white/50"
          }`}
        >
          <Icon />
        </button>
      ))}
    </div>
  );
}
