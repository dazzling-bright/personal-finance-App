import React from "react";
import OverviewSectionContainer from "../../../components/shared/OverviewSectionContainer";
import OverviewSectionHeader from "../../../components/shared/OverviewSectionHeader";

const OverviewTransactions: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewSectionHeader
        headerText="transactions"
        hyperlinkText="View all"
        url="transactions"
      />
      <OverviewTransactionList />
    </OverviewSectionContainer>
  );
};

export default OverviewTransactions;

//type for a transaction item
interface Transaction {
  id: string;
  name: string;
  amount: string;
  date: string;
  avatarUrl: string;
}

// Props for the list item component
interface OverviewTransactionListItemProps {
  transaction: Transaction;
}

const OverviewTransactionListItem: React.FC<
  OverviewTransactionListItemProps
> = ({ transaction }) => {
  return (
    <li
      className="flex items-center justify-between p-4 border-b border-custom-light-grey"
      aria-labelledby={`transaction-user-${transaction.id} transaction-amount-${transaction.id}`}
    >
      {/* Avatar and Name */}
      <figure className="flex items-center space-x-3">
        <img
          src={transaction.avatarUrl}
          alt={`Profile picture of ${transaction.name}`}
          className="w-10 h-10 rounded-full bg-custom-grey"
          aria-hidden="true"
        />
        <figcaption
          id={`transaction-user-${transaction.id}`}
          className="font-bold text-sidebar"
        >
          {transaction.name}
        </figcaption>
      </figure>

      {/* Amount and Date */}
      <p className="flex items-end flex-col">
        <strong
          id={`transaction-amount-${transaction.id}`}
          className="text-custom-torquoise font-bold"
        >
          {transaction.amount}
        </strong>
        <time dateTime={transaction.date} className="text-custom-grey">
          {new Date(transaction.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </p>
    </li>
  );
};

const OverviewTransactionList = React.memo(() => {
  const transactions: Transaction[] = [
    {
      id: "1",
      name: "Emma Richardson",
      amount: "$575.50",
      date: "2024-08-19",
      avatarUrl: "https://via.placeholder.com/40",
    },
    {
      id: "2",
      name: "John Doe",
      amount: "$320.00",
      date: "2024-07-15",
      avatarUrl: "https://via.placeholder.com/40",
    },
    {
      id: "3",
      name: "Jane Smith",
      amount: "$150.75",
      date: "2024-06-10",
      avatarUrl: "https://via.placeholder.com/40",
    },
  ];

  return (
    <ul>
      {transactions.map((transaction) => (
        <OverviewTransactionListItem
          key={transaction.id}
          transaction={transaction}
        />
      ))}
    </ul>
  );
});
