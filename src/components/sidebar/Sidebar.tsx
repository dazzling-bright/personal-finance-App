import SidebarHeader from "./SidebarHeader";
import SidebarMinimizeBtn from "./SidebarMinimizeBtn";
import SidebarNavLInks from "./SidebarNavLinks";

const Sidebar = () => {

  
  return (
    <section className="bg-sidebar min-h-full rounded-r-lg pr-4 flex flex-col ">
      <SidebarHeader />
      <SidebarNavLInks />
      <SidebarMinimizeBtn />
    </section>
  );
};

export default Sidebar;
