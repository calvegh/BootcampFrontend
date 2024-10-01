import { Link, Outlet } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
export const DashboardPage = () => {
  return (
    <MainLayout>
      <h1>Dashboard</h1>
      <p>Esta es la pagina de dashboard</p>

      <Link to="detalle">Detalle</Link>
      <br />
      <Link to="/dashboard">general</Link>

      <Outlet />
    </MainLayout>
  );
};
