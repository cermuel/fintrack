import { constants } from "../constants";
import { usePathname } from "next/navigation";

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}
const Sidebar = ({ showSidebar, toggleSidebar }: SidebarProps) => {
  const route = usePathname();
  return (
    <ul
      className={`w-[320px] bg-[#FCFDFD] ${showSidebar ? "left-0" : "-left-[320px]"} transition-[left] px-2 py-4 duration-300 shadow ease-linear fixed z-40 h-[calc(100vh-4rem)] top-16 flex flex-col`}
    >
      {constants.SIDEBAR_MENU.map((item, index: number) => (
        <li
          key={index}
          onClick={toggleSidebar}
          className={`w-full ${route === item.route ? "bg-[#38677629] text-[#3A6C7B]" : "text-[#1B2528]"} h-9 flex items-center px-4 font-medium text-[15px] cursor-pointer rounded-full`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
