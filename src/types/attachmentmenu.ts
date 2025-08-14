export interface MenuItemData {
  icon: string;
  text: string;
  action: string;
  onClick?: () => void;
}

export interface MenuItemProps {
  icon: string;
  text: string;
  onClick?: () => void;
}

export interface MenuDropdownProps {
  isOpen: boolean;
  items: MenuItemData[];
  onItemClick?: (action: string) => void;
}

export interface MenuTriggerProps {
  onClick: () => void;
}

export interface AttachmentMenuContainerProps {
  isOpen: boolean;
  onToggle: () => void;
  onItemClick?: (action: string) => void;
}
