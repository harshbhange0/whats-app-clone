import React from "react";
import { EmojiSvg, AddSvg, MicSvg } from "../assets/_";

function SendMassage() {
  return (
    <div className="flex h-full flex-row items-center px-5 py-2">
      <span className="cursor-pointer px-3 py-2 text-2xl text-gray-500">
        <EmojiSvg />
      </span>
      <span className="cursor-pointer px-3 py-2 text-2xl text-gray-500">
        <AddSvg />
      </span>
      <input
        className="w-full rounded-md px-2 py-2 placeholder:ps-3"
        type="text"
        placeholder="type a massage"
      />
      <span className="cursor-pointer px-3 py-2 text-2xl text-gray-500">
        <MicSvg />
      </span>
    </div>
  );
}

export default SendMassage;
