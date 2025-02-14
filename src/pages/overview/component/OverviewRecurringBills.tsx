import OverviewSectionContainer from "../../../components/shared/OverviewSectionContainer";
import OverviewSectionHeader from "../../../components/shared/OverviewSectionHeader";

const OverviewRecurringBills: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewSectionHeader
        headerText="recurring bills"
        hyperlinkText="See details"
        url="recurring-bills"
      />
      <OverviewReccurringBillsList />
    </OverviewSectionContainer>
  );
};

export default OverviewRecurringBills;

const OverviewReccurringBillsList = () => {
  const overviewReccurringBillsData = [
    {
      header: "Paid Bills",
      amount: 120,
      borderColor: "var(--color-custom-torquoise)",
    },
    {
      header: "total upcoming",
      amount: 300,
      borderColor: "var(--color-custom-light-blue)",
    },
    {
      header: "due soon",
      amount: 80,
      borderColor: "var(--color-custom-grey)",
    },
  ];
  return (
    <ul>
      {overviewReccurringBillsData.map(({ header, amount, borderColor }) => (
        <OverviewReccurringBillsCard
          heading={header}
          amount={amount}
          borderColor={borderColor}
        />
      ))}
    </ul>
  );
};

const OverviewReccurringBillsCard = ({
  heading,
  amount,
  borderColor,
}: {
  heading: string;
  amount: number;
  borderColor: string;
}) => {
  return (
    <li
      className={`${borderColor} border-l-4 px-4 py-2 my-2 capitalize rounded-sm shadow-sm flex justify-between`}
      style={{ borderLeftColor: `${borderColor}` }}
    >
      <p className="text-gray-600">{heading}</p>
      <p className="font-medium">${amount}</p>
    </li>
  );
};
