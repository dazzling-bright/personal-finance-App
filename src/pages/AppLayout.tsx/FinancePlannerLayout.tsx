import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const FinancePlannerLayout = () => {
  return (
    <main className="min-h-screen flex bg-main-pages-background">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default FinancePlannerLayout;
