import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = () => {
    login({ name: "User" }, "HDFC", "fake-jwt-token");
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
