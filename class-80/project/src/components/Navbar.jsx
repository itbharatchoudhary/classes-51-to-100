import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">ReactRouter</h1>

        <div className="flex gap-8 text-sm font-medium">
          {["/", "/about", "/login"].map((path, i) => {
            const names = ["Home", "About", "Login"];
            return (
              <NavLink
                key={path}
                to={path}
                end
                className={({ isActive }) =>
                  `transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "text-white border-b-2 border-white"
                      : "text-white/70"
                  }`
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
