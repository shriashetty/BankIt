import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Navbar />
        <h2>Dashboard</h2>
        <p>Welcome to your bank dashboard</p>
      </div>
    </div>
  );
}
