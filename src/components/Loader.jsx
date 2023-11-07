import React, { useEffect, useState } from "react";
import { LoaderIcon, LockSvg } from "../assets/_";

function Loader({ done }) {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    setIsDone(!isDone);
  }, [done]);

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-[#f0f2f5]">
        <span className="loader_icon_wrapper overflow-hidden text-3xl text-gray-500">
          <LoaderIcon />
        </span>
        <div
          className={`loader__progress ${
            isDone ? "loader__progress--done" : ""
          }`}
        ></div>
        <div>
          <h1 className="mb-5 text-center text-3xl text-gray-700 sm:text-[2.3vw]">
            WhatsApp
          </h1>
          <p className="flex flex-row items-center justify-center text-center text-[12px] text-gray-400">
            <span className="me-1">
              <LockSvg />
            </span>
            <span>End-to-end encrypted</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Loader;
