import Switch from "@/assets/icons/Switch.svg";
import Keyframes from "@/assets/icons/Keyframes.svg";
import DesignNib from "@/assets/icons/design-nib.svg";

export default function DesignTools() {
  return (
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
    </div>
  );
}
