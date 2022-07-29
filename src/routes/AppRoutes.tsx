import { Route, Routes } from "react-router-dom";
import { RoutesUrls } from "utils/routes";
import DashboardHome from "pages/Dashboard/DashboardHome/DashboardHome";
import NotFound from "pages/NotFound/NotFound";

const { ERROR, HOME } = RoutesUrls;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<DashboardHome />} />
      <Route path={ERROR} element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
