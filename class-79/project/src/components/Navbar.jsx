import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ContactSphere</h1>

        <div className="flex gap-6">
          {["/", "/contacts", "/about"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="relative group"
            >
              <span className="group-hover:text-cyan-400 transition">
                {path === "/" ? "Home" : path.replace("/", "")}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
