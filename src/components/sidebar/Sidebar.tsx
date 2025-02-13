import SidebarButton from "./SidebarButton";
import SidebarHeader from "./SidebarHeader";
import { useLocation } from "react-router-dom";
import {
  FaHome,
  FaExchangeAlt,
  FaPiggyBank,
  FaWallet,
  FaCalendarAlt,
} from "react-icons/fa";

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

const Sidebar = () => {
  //get the last item from the current location
  const pathname = useLocation().pathname.split("/").pop();

  return (
    <section className="bg-sidebar min-h-full rounded-r-lg pr-4 flex flex-col">
      <SidebarHeader />
      {SideBarButtons.map((item, index: number) => {
        const activeTab: boolean = pathname === item.path;
        return (
          <SidebarButton
            key={index}
            icon={item.icon}
            btnText={item.text}
            path={item.path}
            activeTab={activeTab}
          />
        );
      })}
      ;
    </section>
  );
};

export default Sidebar;
