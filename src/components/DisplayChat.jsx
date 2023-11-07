import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader.jsx";
import data from "../data/data.js";
import Chat from "./Chat.jsx";

function DisplayChat() {
  const { id } = useParams();

  let user = data[id];
  let userMT = data[id].massage.today;

  return (
    <section>
      <ChatHeader userName={user.userName} img={user.userImg} />
      <div className="bg- relative h-[calc(100vh-60px)] overflow-hidden bg-[#e4dcd4] 2xl:h-[calc(100vh-60px-2.5rem)]">
        <div
          className=" absolute h-full w-full"
          style={{
            backgroundImage:
              "url(https://whatsapp-clone-web.netlify.app/static/media/bg-chat-light.7fff1c4f.png)",
            backdropFilter: "inherit",
            backgroundPosition: "center",
            opacity: ".05",
          }}
        ></div>
        <div className="z-20 h-full w-full p-5">
          {user.massage.yesterday && (
            <div className="flex flex-col gap-y-1 px-10">
              {user.massage.yesterday.map((item, i) => {
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
            <div>
              {/* {userMT((item, i) => {
                return (
                  <div key={i} className="">
                    <span>{item.content}</span>
                    <SideSvg />
                  </div>
                );
              })} */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


export default DisplayChat;
