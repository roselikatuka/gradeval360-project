import { Link, NavLink, Outlet } from "react-router-dom";
import RoleSwitcher from "../components/RoleSwitcher";

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm ${
          isActive ? "text-black" : "text-slate-600 hover:text-black"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-semibold">
            GradEval360
          </Link>

          <nav className="flex items-center gap-4">
            <NavItem to="/" label="Home" />
            <NavItem to="/dashboard" label="Dashboard" />
            <NavItem to="/appointments/123" label="Demo Appointment" />
          </nav>

          <RoleSwitcher />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
}
