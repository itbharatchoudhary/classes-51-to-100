import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-32 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-gray-400 mt-4 mb-6">
        Page Not Found
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
