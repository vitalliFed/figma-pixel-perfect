import Globe from "@/assets/icons/globe.svg";
import MultiPage from "@/assets/icons/multiple-pages-add.svg";
import Link from "@/assets/icons/link.svg";
import type { MenuItemData } from "@/types/attachmentmenu";

export const attachmentMenuItems: MenuItemData[] = [
  {
    icon: MultiPage,
    text: "Add photos & files",
    action: "add_files",
  },
  {
    icon: Globe,
    text: "Link",
    action: "add_link",
  },
  {
    icon: Link,
    text: "Select campaign",
    action: "select_campaign",
  },
];
