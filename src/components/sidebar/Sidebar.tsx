import SidebarButton from "./SidebarButton";
import SidebarHeader from "./SidebarHeader";
import { useLocation } from "react-router-dom";

type SideBarBtnProps = {
  text: string;
  path: string;
};

const SideBarButtons: SideBarBtnProps[] = [
  { text: "overview", path: "overview" },
  { text: "transactions", path: "transactions" },
  { text: "budgets", path: "budgets" },
  { text: "pots", path: "pots" },
  { text: "recurring bills", path: "recurring-bills" },
];

const Sidebar = () => {

  //get the last item from the current location
  const pathname = useLocation().pathname.split("/").pop();

  return (
    <section className="bg-gray-800 min-h-screen rounded-r-lg !pr-4 flex flex-col">
      <SidebarHeader />
      {SideBarButtons.map((item, index) => {
        const activeTab: boolean = pathname === item.path;
        return (
          <SidebarButton
            key={index}
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
