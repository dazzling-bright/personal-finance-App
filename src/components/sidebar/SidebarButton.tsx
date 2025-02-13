import React from "react";
import { Link } from "react-router-dom";

const SidebarButton = ({
  btnText,
  path,
  activeTab,
  icon,
}: {
  btnText: string;
  path: string;
  activeTab: boolean;
  icon: React.JSX.Element;
}): React.JSX.Element => (
  <Link
    to={path}
    className={`w-full flex items-center gap-4 text-left pl-6 py-3 ${
      activeTab ? "bg-white text-gray-800" : "text-white"
    } border-l-4 ${
      activeTab ? "border-custom-torquoise" : "border-l-transparent"
    } rounded-r-xl capitalize transition-all duration-300 cursor-pointer`}
  >
    <span className={`${activeTab ? "text-custom-torquoise" : "text-white"}`}>
      {icon}
    </span>
    <span>{btnText}</span>
  </Link>
);

export default SidebarButton;
