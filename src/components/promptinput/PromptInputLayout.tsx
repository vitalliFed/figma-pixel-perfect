import type { PromptInputLayoutProps } from "@/types/promptinput";

export default function PromptInputLayout({
  children,
}: PromptInputLayoutProps) {
  return (
    <div className="min-h-[107px] bg-white p-2 m-2 rounded-[20px]">
      {children}
    </div>
  );
}
