import React from "react";
import { Link } from "react-router-dom";
function ChatItem({ user }) {
  return (
    <Link to={`/chat/user/${user?.id}`}>
      <div className="flex w-full cursor-pointer flex-row items-center justify-start border-b p-2 hover:bg-gray-100/60 ">
        <div className="h-12 w-12">
          <img src={user?.userImg} className="w-full rounded-full " alt="" />
        </div>
        <div className="ms-4   flex w-full justify-between items-center text-center">
          <span>{user?.userName}</span>
          {user?.unRead !== 0 && (
            <div className="w-[18px] ms-auto rounded-full bg-[#06d755] text-center text-[12px] text-white">

              {user.unRead}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ChatItem;
