import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useSearch } from "../hooks/useSearch";

interface NavbarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}
const Navbar = ({ toggleSidebar, showSidebar }: NavbarProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const { setSearchQuery } = useSearch();
  return (
    <nav className="w-screen bg-[#FCFDFD] h-[64px] shadow fixed top-0 left-0 flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <button onClick={toggleSidebar} className="cursor-pointer">
          {showSidebar ? (
            <VscClose className="md:size-6 size-5" />
          ) : (
            <RxHamburgerMenu className="md:size-6 size-5" />
          )}
        </button>
        <img src="/logo.svg" alt="logo" className="md:h-7.5 h-6" />
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div
          className={`flex items-center h-full ${showSearch && "gap-2 md:gap-4"}`}
        >
          <CiSearch
            onClick={() => setShowSearch(!showSearch)}
            className="text-[#1B2528] size-6 rotate-360 cursor-pointer"
          />
          <div
            className={`${showSearch ? "sm:max-w-[250px] max-w-[200px]" : "max-w-0"} transition-all duration-300 w-full h-full flex items-center overflow-hidden`}
          >
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              placeholder="Search transactions…"
              className="bg-transparent font-light outline-none text-black/80 placeholder:text-[#757575] transition-all duration-300"
            />
            <VscClose
              onClick={() => setShowSearch(false)}
              className="text-[#757575] size-6 cursor-pointer"
            />
          </div>
        </div>
        <img
          src="/icons/app-grid.svg"
          alt="app grid icon"
          className="w-4.5 aspect-square max-md:hidden"
        />
        <img
          src="/icons/user-icon.svg"
          alt="user icon"
          className="w-7 aspect-square"
        />
      </div>
    </nav>
  );
};

export default Navbar;
