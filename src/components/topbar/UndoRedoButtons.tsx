import UndoLeft from "@/assets/icons/undo.svg";
import UndoRight from "@/assets/icons/undoRight.svg";

export default function UndoRedoButtons() {
  return (
    <div className="flex items-center bg-white w-16 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] rounded-lg p-0">
      <button className="p-1.5 rounded hover:bg-gray-100 transition-colors flex-1 flex justify-center">
        <UndoLeft />
      </button>

      {/* Separator line */}
      <div className="w-px h-4 bg-[#E4E7EC]"></div>

      <button className="p-1.5 rounded hover:bg-gray-100 transition-colors flex-1 flex justify-center">
        <UndoRight />
      </button>
    </div>
  );
}
