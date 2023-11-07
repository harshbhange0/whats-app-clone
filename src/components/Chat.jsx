import  "./style.css";
function Chat({ content, isSender }) {
  return (
    <div
      className={` ${
        isSender ? "me-auto bg-white res" : "ms-auto bg-[#d9fdd3] send"
      } chat_wrapper `}
    >
      <span className="text-sm">{content}</span>
    </div>
  );
}
export default Chat;
