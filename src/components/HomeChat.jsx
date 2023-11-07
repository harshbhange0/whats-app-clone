import React from "react";
import desktopImf from "../assets/desktop-hero.png";

function HomeChat() {
  return (
    <div className="flex h-[calc(100vh-2.5rem)] w-full flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <img
          className="w-[35vw] transition-all duration-100 ease-in"
          src={desktopImf}
          alt="whatsapp"
        />
        <div className="space-y-6 text-center">
          <h1 className="text-[3vw] font-thin transition-all duration-100 ease-in">
            Download WhatsApp for Windows
          </h1>
          <p className="text-[1.2vw] text-gray-500/70">
            Make calls, share your screen and get a faster experience when you
            download the Windows app.
          </p>
        </div>
        <button className="rounded-3xl bg-[#008069] px-5 py-2 font-semibold text-white">
          Get the App
        </button>
      </div>
    </div>
  );
}

export default HomeChat;
