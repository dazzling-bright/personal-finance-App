import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FinancePlannerLayout from "./pages/AppLayout.tsx/FinancePlannerLayout";
import OverviewPage from "./pages/overview/OverviewPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FinancePlannerLayout />,

    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
