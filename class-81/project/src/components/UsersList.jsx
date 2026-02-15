import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import Loader from "./Loader";

function UsersList() {
  const { users, loading, error } = useContext(ApiContext);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {user.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {user.email}
          </p>
          <p className="text-sm text-gray-500">
            📍 {user.address.city}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
