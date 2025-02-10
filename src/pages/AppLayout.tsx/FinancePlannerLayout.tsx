import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const { Sider, Content } = Layout;

const FinancePlannerLayout = () => {
  return (
    <Layout className="h-screen">
      <Sider width={200} className="max-w-[200px] min-w-[200px]">
        <Sidebar />
      </Sider>
      <Layout className="flex-1">
        <Content className="p-4">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default FinancePlannerLayout;
