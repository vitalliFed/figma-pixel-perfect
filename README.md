
# Chat Interface

**React + TypeScript + Vite** modular chat interface with enterprise-level architecture.

## Quick Start

```bash
npm install
npm run dev

Scripts

npm run dev - Development server
npm run build - Production build
npm run preview - Preview build
src/
├── components/
│   ├── topbar/
│   │   ├── TopBar.tsx
│   │   ├── DesignTools.tsx
│   │   ├── VariantDropdown.tsx
│   │   ├── DeviceSelector.tsx
│   │   ├── UndoRedoButtons.tsx
│   │   └── ActionButtons.tsx
│   ├── chatheader/
│   │   ├── ChatHeader.tsx
│   │   ├── PageSelector.tsx
│   │   ├── DropdownMenu.tsx
│   │   └── DropdownItem.tsx
│   ├── chatpanel/
│   │   ├── ChatPanel.tsx
│   │   ├── ChatLayout.tsx
│   │   ├── MessagesArea.tsx
│   │   └── ChatControls.tsx
│   ├── chatmessage/
│   │   ├── ChatMessage.tsx
│   │   ├── MessageContainer.tsx
│   │   ├── MessageLayout.tsx
│   │   ├── MessageAvatar.tsx
│   │   └── MessageBubble.tsx
│   ├── promptinput/
│   │   ├── PromptInput.tsx
│   │   ├── PromptInputContainer.tsx
│   │   ├── PromptInputLayout.tsx
│   │   ├── AutoResizeTextarea.tsx
│   │   └── InputControls.tsx
│   ├── attachmentmenu/
│   │   ├── AttachmentMenu.tsx
│   │   ├── AttachmentMenuContainer.tsx
│   │   ├── MenuDropdown.tsx
│   │   ├── MenuTrigger.tsx
│   │   └── MenuItem.tsx
│   └── ui/
│       └── button.tsx
├── hooks/
│   ├── useChatMessages.ts
│   └── usePromptInput.ts
├── types/
│   ├── index.ts
│   ├── topbar.ts
│   ├── chatheader.ts
│   ├── chatpanel.ts
│   ├── chatmessage.ts
│   ├── promptinput.ts
│   └── attachmentmenu.ts
├── data/
│   ├── mockMessages.ts
│   └── attachmentMenuItems.ts
├── utils/
│   └── messageUtils.ts
└── assets/
    └── icons/
