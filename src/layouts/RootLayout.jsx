import { NavLink, Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="mercury">Mercury</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
      <Breadcrumb />
    </div>
  );
};

export default RootLayout;
