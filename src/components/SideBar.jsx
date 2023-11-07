import React from "react";
import ChatList from "./ChatList";
import SearchBar from "./SearchBar";

function SideBar() {
  return (
    <div className="relative ">
      <div className="sticky top-0">
        <SearchBar />
      </div>
      <ChatList />
    </div>
  );
}

export default SideBar;
