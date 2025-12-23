import formatCurrency from "../utils/formatCurrency";

export default function AccountCard({ account }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
      <h3>{account.type}</h3>
      <p>Balance: {formatCurrency(account.balance)}</p>
    </div>
  );
}
