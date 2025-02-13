import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import FinancePlannerLayout from "./pages/AppLayout.tsx/FinancePlannerLayout";

import "./index.css";
import OverviewPage from "./pages/overview/OverviewPage";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FinancePlannerLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview" replace />,
      },
      {
        path: "overview",
        element: <OverviewPage />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
