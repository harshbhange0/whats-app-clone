import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader.jsx";
import data from "../data/data.js";
import Chat from "./Chat.jsx";
import SendMassage from "./SendMassage.jsx";

function DisplayChat() {
  const { id } = useParams();

  let user = data[id];
  let userMT = data[id].massage.today;
  let userMY = data[id].massage.yesterday;

  return (
    <section>
      <ChatHeader userName={user.userName} img={user.userImg} />
      <div className="bg- relative h-[calc(100vh-60px-60px)] overflow-hidden bg-[#e4dcd4] 2xl:h-[calc(100vh-60px-2.5rem-60px)]">
        <div
          className=" absolute z-10 h-full w-full"
          style={{
            backgroundImage:
              "url(https://whatsapp-clone-web.netlify.app/static/media/bg-chat-light.7fff1c4f.png)",
            backdropFilter: "inherit",
            backgroundPosition: "center",
            opacity: ".05",
          }}
        ></div>
        <div className="z-50 h-full">
          <div className="z-20 h-full w-full p-5">
            {user.massage.yesterday && (
              <div className="flex flex-col gap-y-1 px-10">
                <div className="my-3 flex w-full items-center justify-center">
                  <span className="rounded-md bg-white/90 px-2 py-1 text-sm">
                    YESTERDAY
                  </span>
                </div>
                {userMY.map((item, i) => {
                  return (
                    <Chat
                      key={i}
                      isSender={item.sender}
                      content={item.content}
                    />
                  );
                })}
              </div>
            )}

            {user.massage.today && (
              <div className="flex flex-col gap-y-1 px-10">
                <div className="my-3 flex w-full items-center justify-center">
                  <span className="rounded-md bg-white/90 px-2 py-1 text-sm">
                    TODAY
                  </span>
                </div>
                {userMT.map((item, i) => {
                  return (
                    <Chat
                      key={i}
                      isSender={item.sender}
                      content={item.content}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <SendMassage />
    </section>
  );
}

export default DisplayChat;
