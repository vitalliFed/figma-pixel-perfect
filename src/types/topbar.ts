export type DeviceType = "desktop" | "tablet" | "mobile";

export interface VariantDropdownProps {
  isOpen: boolean;
  selectedVariant: string;
  variants: string[];
  onToggle: () => void;
  onSelectVariant: (variant: string) => void;
}

export interface DeviceSelectorProps {
  selectedDevice: DeviceType;
  onDeviceSelect: (device: DeviceType) => void;
}
