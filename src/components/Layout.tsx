"use client";
import { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <main className="w-screen h-dvh pt-[64px] overflow-x-hidden overscroll-y-scroll bg-[#FCFDFD]">
      <Navbar
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar(!showSidebar)}
      />
      <Sidebar
        showSidebar={showSidebar}
        toggleSidebar={() => setShowSidebar(false)}
      />
      <div
        className={`float-right ${showSidebar ? "md:w-[calc(100%-320px)] w-full" : "w-full"} h-max transition-[width]`}
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
