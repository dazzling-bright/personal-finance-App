import React from "react";
import {
  FaCalendarAlt,
  FaExchangeAlt,
  FaHome,
  FaPiggyBank,
  FaWallet,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useMinimizeSidebar from "../../store/sidebarStore";

type SideBarBtnProps = {
  text: string;
  path: string;
  icon: React.JSX.Element;
};

const SideBarButtons: SideBarBtnProps[] = [
  { text: "overview", path: "overview", icon: <FaHome /> },
  { text: "transactions", path: "transactions", icon: <FaExchangeAlt /> },
  { text: "budgets", path: "budgets", icon: <FaPiggyBank /> },
  { text: "pots", path: "pots", icon: <FaWallet /> },
  { text: "recurring bills", path: "recurring-bills", icon: <FaCalendarAlt /> },
];

const SidebarNavLInks = () => {
  const pathname = useLocation().pathname.split("/").pop();
  const { isMinimized } = useMinimizeSidebar();

  return (
    <ul
      className={`flex flex-col ${isMinimized ? "items-center" : "items-start"}`}
    >
      {SideBarButtons.map(({ path, icon, text }, index: number) => {
        const activeTab: boolean = pathname === path;
        return (
          <li key={index}>
            <Link
              to={path}
              className={` flex items-center gap-4 text-left px-4 py-3 ${
                activeTab ? "bg-white text-sidebar" : "text-white"
              } border-l-4 ${
                activeTab ? "border-custom-torquoise" : "border-l-transparent"
              } rounded-r-xl capitalize cursor-pointer hover:bg-white hover:text-sidebar transition-all duration-300`}
            >
              <span
                className={`hover:text-sidebar ${activeTab && "text-custom-torquoise"}`}
              >
                {icon}
              </span>
              {!isMinimized && <span>{text}</span>}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarNavLInks;
