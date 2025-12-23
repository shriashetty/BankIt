import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{ width: 200, background: "#eee", height: "100vh", padding: 10 }}>
      <p><Link to="/">Dashboard</Link></p>
      <p><Link to="/accounts">Accounts</Link></p>
      <p><Link to="/transfer">Transfer</Link></p>
      <p><Link to="/profile">Profile</Link></p>
    </div>
  );
}
