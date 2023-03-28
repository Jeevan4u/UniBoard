import React, { useEffect, useState } from "react";
import avatar from "../assets/image/avatar.png";
import {
  MessageIcon,
  NotificationIcon,
  ToggleDarkIcon,
  ToggleLightIcon,
} from "../helper/svgIcon";
export default function Header() {
  const [mode, setMode] = useState(() => {
    return (
      localStorage.getItem("mode") ||
      ("light" && localStorage.setItem("mode", "light"))
    );
  });

  useEffect(() => {
    if (mode === "light") {
      document.querySelector("html").classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      document.querySelector("html").classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  }, [mode]);

  return (
    <div className="header flex p-4  items-center bg-[#0072BC] text-white  dark:bg-gray-800 dark:text-white dark:rounded-none transition-all duration-300">
      <div className="header-text flex">

        <p className="text-2xl font-medium mx-2">Dashboard</p>
      </div>
      <div className="header-icon-container flex items-center ml-auto gap-x-2">
        <div
          className="icon w-10 overflow-hidden flex"
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        >
          <ToggleDarkIcon
            className={`transition-transform duration-300 grow shrink-0 cursor-pointer ${
              mode === "light" ? "-translate-x-12" : "translate-x-0"
            }`}
          />
          <ToggleLightIcon
            className={`transition-transform duration-300 grow shrink-0 cursor-pointer ${
              mode === "dark" ? "translate-x-12" : "-translate-x-10"
            }`}
          />
        </div>
        <div className="icon w-10">
          <NotificationIcon />
        </div>
        <div className="icon w-10">
          <MessageIcon />
        </div>
        <div className="user cursor-pointer">
          <div className="user-image w-12 relative">
            <img src={avatar} alt="" />
          </div>
          <div className="sub-menu">
            <div className="sub-menu-head">
              <p className="welcome-message">Welcome admin</p>
              <p>User Name</p>
            </div>
            <div className="sub-menu-option">
              <div className="sub-menu-item">
                <p>Profile</p>
              </div>
              <div className="sub-menu-item">
                <p>Settings</p>
              </div>
              <div className="sub-menu-item">
                <p>Log Out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
