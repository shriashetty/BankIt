import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div style={{ padding: 15, background: "#222", color: "#fff" }}>
      <span>🏦 MyBank</span>
      <button onClick={logout} style={{ float: "right" }}>Logout</button>
    </div>
  );
}
