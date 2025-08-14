export default function ActionButtons() {
  return (
    <div className="flex items-center gap-1">
      <button className="hover:bg-gray-100 transition-colors ml-2 py-2 px-3 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(21,28,36,0.05)] rounded-lg text-[#141C25] font-medium text-[13px] leading-[100%] tracking-[-0.01em]">
        Discard
      </button>

      <button className="hover:opacity-90 transition-opacity ml-2 py-2 px-3 bg-[#795DFC] rounded-lg text-white font-medium text-[13px] leading-[100%] tracking-[-0.01em]">
        Save
      </button>
    </div>
  );
}
