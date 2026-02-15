import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user, login, logout } = useContext(UserContext);

  return (


    <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        ContextHub Pro
      </h1>


      {user ? (
        <button
          onClick={logout}
          className="px-4 py-1 rounded bg-red-500 text-white"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={login}
          className="px-4 py-1 rounded bg-green-500 text-white"
        >
          Login
        </button>
      )}

    </nav>

  );
}

export default Navbar;
