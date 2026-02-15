import ProfileCard from "./ProfileCard";
import UsersList from "./UsersList";

function Dashboard() {
  return (
    <div className="px-6 pb-10">
      <div className="flex justify-center mt-10">
        <ProfileCard />
      </div>

      <h2 className="text-2xl font-bold mt-14 text-gray-800 dark:text-white">
        Users from Public API
      </h2>

      <UsersList />
    </div>
  );
}

export default Dashboard;
