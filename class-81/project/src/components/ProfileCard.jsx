import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function ProfileCard() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-80 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        {user ? `Welcome, ${user}` : "Guest User"}
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Authentication managed using Context API
      </p>
    </div>
  );
}

export default ProfileCard;
