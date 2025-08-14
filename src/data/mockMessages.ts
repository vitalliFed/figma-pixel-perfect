import type { Message } from "@/types";

export const mockMessages: Message[] = [
  {
    id: "1",
    text: "Create home page for my site!",
    isUser: true,
    timestamp: new Date(Date.now() - 360000),
  },
  {
    id: "2",
    text: "I'll create a modern, engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.\n\nLet me build something that captures attention with dynamic visuals and clear value propositions.",
    isUser: false,
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "3",
    text: "Additional prompt for AI here",
    isUser: true,
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "4",
    text: "Engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.",
    isUser: false,
    timestamp: new Date(Date.now() - 180000),
  },
];
