import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { ApiProvider } from "./context/ApiContext";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ApiProvider>
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <Dashboard />
          </div>
        </ApiProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
