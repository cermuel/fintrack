"use client";
import { useState } from "react";
import DashboardHeader from "../components/ui/dashboard/dashboard-header";
import { constants } from "../constants";
import DashboardSummary from "../components/ui/dashboard/dashboard-summary";
import DashboardTable from "../components/ui/dashboard/dashboard-table";
import Image from "next/image";

type tabType = "Overview" | "Transactions";
const Dashboard = () => {
  const tabs: tabType[] = ["Overview", "Transactions"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full h-max py-10 md:px-10 px-4 ">
      <DashboardHeader />
      <div className="flex mt-4 items-center">
        {constants.USERS.slice(0, 4).map((e, idx: number) => (
          <div className="relative w-10 h-10 max-md:w-8 max-md:h-8" key={idx}>
            <Image
              className={`rounded-full md:border-4 border-2 border-[#FCFDFD] w-full h-full absolute top-0`}
              style={{
                left: `-${20 * idx}%`,
              }}
              src={e}
              width={100}
              height={100}
              alt="employee"
            />
          </div>
        ))}
        <p className="text-[#15272D9E] max-md:text-sm">
          Ava, Liam, Noah <span>+12 others</span>
        </p>
      </div>
      <div className="mt-4 flex items-end">
        {tabs.map((t, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(t)}
            className={`${
              activeTab === t
                ? "border-b-[#4B8B9F] text-[#4B8B9F]"
                : "border-b-[#49656E33] text-[#49656E9A]"
            } border-b-2 px-6 py-2 cursor-pointer`}
          >
            {t}
          </button>
        ))}
        <div
          className={` "border-b-[#49656E33] text-[#49656E33] flex-1 border-b-2 px-6 py-2`}
        >
          ''
        </div>
      </div>
      <DashboardSummary />
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
