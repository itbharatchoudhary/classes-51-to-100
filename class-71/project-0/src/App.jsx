import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { users } from "./data/users";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="User Dashboard" />
      <UserList users={users} />
    </div>
  );
}

export default App;