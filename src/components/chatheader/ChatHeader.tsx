import { useState } from "react";
import PageSelector from "./PageSelector";
import DropdownMenu from "./DropdownMenu";

export default function ChatHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pageUrl = "cognism.page/get-started";

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative m-2 font-intel">
      <PageSelector
        pageUrl={pageUrl}
        isDropdownOpen={isDropdownOpen}
        onToggleDropdown={handleToggleDropdown}
      />

      <DropdownMenu isOpen={isDropdownOpen} onClose={handleCloseDropdown} />
    </div>
  );
}
