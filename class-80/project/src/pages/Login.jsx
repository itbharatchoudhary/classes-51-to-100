import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // fake login logic
    navigate("/dashboard");
  }

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

      <button
        onClick={handleLogin}
        className="w-full py-3 rounded-lg bg-white text-black font-medium hover:scale-105 transition"
      >
        Login
      </button>
    </div>
  );
}

export default Login;
