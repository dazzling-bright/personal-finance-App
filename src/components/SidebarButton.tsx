import React from "react";

const SidebarButton = ({ btnText }: { btnText: string }): React.JSX.Element => (
  <button className="w-full text-left pl-6 py-3 text-white hover:bg-white hover:text-gray-700 rounded-r-xl capitalize transition-all duration-300 cursor-pointer">
    {btnText}
  </button>
);

export default SidebarButton;
