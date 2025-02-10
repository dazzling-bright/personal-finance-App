import { Flex } from "antd";
import SidebarButton from "./SidebarButton";
import SidebarHeader from "./SidebarHeader";

type SideBarBtnProps = {
  text: string;
};

const SideBarButtons: SideBarBtnProps[] = [
  { text: "overview" },
  { text: "transactions" },
  { text: "budgets" },
  { text: "pots" },
  { text: "recurring bills" },
];

const Sidebar = () => {
  return (
    <Flex vertical className="bg-gray-800 min-h-screen rounded-r-lg !pr-4">
      <SidebarHeader />
      {SideBarButtons.map((item, index) => (
        <SidebarButton key={index} btnText={item.text} />
      ))}
    </Flex>
  );
};

export default Sidebar;
