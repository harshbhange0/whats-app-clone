import React from "react";
import {
  CommunitiesSvg,
  StatusSvg,
  ChannelsSvg,
  NewChatsSvg,
  MoreSettingSvg,
} from "../assets/_";

function Header() {
  const imgUrl =
    "https://pps.whatsapp.net/v/t61.24694-24/339890413_1071642867128738_8274802290542547080_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdTau3dKP7Q4WS8YKUxCgfOyzlkiHXsbJ7erd0qY-cf6tg&oe=65534034&_nc_sid=e6ed6c&_nc_cat=109";
  return (
    <header className="flex w-full flex-row items-center justify-between bg-[#f0f2f5] px-4 py-2">
      <div className="w-11 overflow-hidden rounded-full ">
        <img className="h-full w-full" src={imgUrl} alt="" />
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <CommunitiesSvg />
        </div>
        <div>
          <StatusSvg />
        </div>
        <div>
          <ChannelsSvg />
        </div>
        <div>
          <NewChatsSvg />
        </div>
        <div>
          <MoreSettingSvg />
        </div>
      </div>
    </header>
  );
}

export default Header;
