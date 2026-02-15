import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Dashboard 📊</h2>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-6 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 transition"
      >
        Go Back
      </button>
    </div>
  );
}

export default Dashboard;
