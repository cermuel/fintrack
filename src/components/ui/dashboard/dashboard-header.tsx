import Image from "next/image";
import { FaEllipsis } from "react-icons/fa6";

const DashboardHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center gap-1.5 md:gap-2.5">
        <h1 className="text-[#1B2528] text-xl font-bold md:text-4xl">
          Wallet Ledger
        </h1>
        <Image width={10} height={10} src="/icons/caret.svg" alt="" />
        <div className="bg-[#34616F17] rounded-full h-7 w-max flex items-center gap-2 px-2.5 ml-1">
          <div className="w-1  h-1  bg-[#087A2E] rounded-full"></div>
          <span className="text-[#1B2528] font-medium text-xs">Active</span>
        </div>
      </div>
      <div className="flex items-center md:gap-4 gap-2">
        <button className="bg-[#4B8B9F] text-[#020303] cursor-pointer text-xs md:text-sm font-medium rounded-full px-4 md:px-5 h-7 md:h-9">
          Share
        </button>
        <button className="md:w-9 w-7 md:h-9 h-7 rounded-full flex items-center justify-center border border-[#49656E33]">
          <FaEllipsis />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
