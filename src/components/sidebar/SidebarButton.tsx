import React from "react";
import { Link } from "react-router-dom";

const SidebarButton = ({
  btnText,
  path,
  activeTab,
}: {
  btnText: string;
  path: string;
  activeTab: boolean;
}): React.JSX.Element => (
  <Link
    to={path}
    className={`w-full block text-left pl-6 py-3 ${
      activeTab ? "bg-white text-gray-800" : "text-white"
    } border-l-4 ${
      activeTab ? "border-l-green-800" : "border-l-transparent "
    } rounded-r-xl capitalize transition-all duration-300 cursor-pointer`}
  >
    {btnText}
  </Link>
);

export default SidebarButton;
