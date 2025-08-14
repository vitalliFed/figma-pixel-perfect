export interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface DropdownItemProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

export interface PageSelectorProps {
  pageUrl: string;
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
}
