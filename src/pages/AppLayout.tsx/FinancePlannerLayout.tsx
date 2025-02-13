import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const FinancePlannerLayout = () => {
  return (
    <main className="min-h-screen grid grid-cols-[250px_auto] bg-main-pages-background">
      <aside className="w-[250px]">
        <Sidebar />
      </aside>
      <section className="w-full ">
        <Outlet />
      </section>
    </main>
  );
};

export default FinancePlannerLayout;
