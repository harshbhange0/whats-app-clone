import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import DisplayChat from "../../components/DisplayChat";
import ChatHeader from "../../components/ChatHeader";
import HomeChat from "../../components/HomeChat";
import { Route, Router, Routes } from "react-router-dom";

function Home() {
  return (
    <section className="relative flex h-screen flex-row items-center justify-center overflow-hidden bg-[#eae6df] before:absolute before:left-0 before:top-0 before:z-10 before:h-[140px] before:w-full before:bg-[#00a884] before:content-[''] 2xl:p-10">
      <div className="z-50 flex h-full w-full flex-row border bg-[#f0f2f5] 2xl:h-[calc(100vh-40px)] ">
        <aside className="w-full flex-[30%] flex-col bg-white">
          <Header />
          <SideBar />
        </aside>
        <main className="w-full flex-[70%] border-l h-full border-white">
          <Routes>
            <Route path="/" element={<HomeChat />} />
            <Route path="/chat/user/:id" element={<DisplayChat />} />
          </Routes>
        </main>
      </div>
    </section>
  );
}

export default Home;
