import React from "react";

function ChatHeader({ img, userName }) {
  return (
    <header className="fromLinkFiber6 flex w-full flex-row items-center  bg-[#f0f2f5] px-4 py-2 shadow-sm">
      <div className="me-4 w-11 overflow-hidden rounded-full">
        <img className="h-full w-full" src={img} alt="" />
      </div>
      <div>
        <span>{userName}</span>
      </div>
    </header>
  );
}

export default ChatHeader;
