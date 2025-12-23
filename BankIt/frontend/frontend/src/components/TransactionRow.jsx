export default function TransactionRow({ tx }) {
  return (
    <tr>
      <td>{tx.date}</td>
      <td>{tx.description}</td>
      <td>{tx.amount}</td>
    </tr>
  );
}
