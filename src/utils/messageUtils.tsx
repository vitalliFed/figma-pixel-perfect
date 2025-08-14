export const getMessageAlignment = (isUser: boolean) => {
  return isUser ? "justify-end" : "justify-start items-start";
};

export const getMessageBubbleStyles = (isUser: boolean) => {
  return isUser
    ? "bg-white text-[#141C25] rounded-xl px-4 py-3 border border-gray-100"
    : "bg-transparent text-[#141C25] px-2";
};

export const formatMessageText = (text: string) => {
  // Handle line breaks and formatting
  return text.split("\n").map((line, index, array) => (
    <span key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </span>
  ));
};
