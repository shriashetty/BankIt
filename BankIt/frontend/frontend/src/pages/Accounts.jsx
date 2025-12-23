import AccountCard from "../components/AccountCard";

const accounts = [
  { id: 1, type: "Savings", balance: 25000 },
  { id: 2, type: "Checking", balance: 12000 }
];

export default function Accounts() {
  return (
    <div>
      <h2>Accounts</h2>
      {accounts.map(acc => (
        <AccountCard key={acc.id} account={acc} />
      ))}
    </div>
  );
}
