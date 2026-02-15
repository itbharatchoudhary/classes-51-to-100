import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <main className="pt-24 px-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
