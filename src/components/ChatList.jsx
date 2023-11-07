import React from "react";
import ChatItem from "./ChatItem";
import data from "../data/data.js";

function ChatList() {
  return (
    <div className="overflow-hidden">
      <div className="flex h-[calc(100vh-57px-60px)] flex-col overflow-y-auto px-3 2xl:h-[calc(100vh-57px-60px-2.5rem)]">
        {data.map((user, i) => {
          return <ChatItem key={i} user={user} />;
        })}
      </div>
    </div>
  );
}

export default ChatList;
