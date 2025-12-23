import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, bankCode } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Bank: {bankCode}</p>
    </div>
  );
}
