import { TbReportMoney } from "react-icons/tb";
import OverviewSectionHeader from "../../../components/shared/OverviewSectionHeader";
import OverviewSectionContainer from "../../../components/shared/OverviewSectionContainer";

// an array of objects with valid Tailwind CSS border colors
const overviewPotsData = [
  {
    header: "savings",
    amount: 120,
    borderColor: "var(--color-custom-torquoise)",
  },
  {
    header: "investments",
    amount: 300,
    borderColor: "var(--color-custom-light-blue)",
  },
  {
    header: "expenses",
    amount: 80,
    borderColor: "var(--color-custom-grey)",
  },
  {
    header: "emergency",
    amount: 200,
    borderColor: "var(--color-custom-beige)",
  },
];

const OverviewPots: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewSectionHeader
        headerText="pot"
        hyperlinkText="see details"
        url="pots"
      />

      <section className="grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
        <OverviewPotCard />
        <OverviewPotSecondaryCards />
      </section>
    </OverviewSectionContainer>
  );
};

export default OverviewPots;

const OverviewPotSecondaryCards = () => {
  return (
    <section className="grid grid-cols-2 gap-4">
      {overviewPotsData.map((card, index) => {
        return (
          <OverviewPotSecondaryCard
            key={index}
            heading={card.header}
            amount={card.amount}
            borderColor={card.borderColor}
          />
        );
      })}
    </section>
  );
};

const OverviewPotCard = () => {
  return (
    <section className="bg-custom-light-grey rounded-2xl p-4 flex gap-4 items-center ">
      <TbReportMoney className="text-4xl text-custom-torquoise" />

      <aside>
        <p className="text-gray-800">Total Saved</p>
        <p className="text-2xl font-bold">$850</p>
      </aside>
    </section>
  );
};

const OverviewPotSecondaryCard = ({
  heading,
  amount,
  borderColor,
}: {
  heading: string;
  amount: number;
  borderColor: string;
}) => {
  return (
    <section
      className={`${borderColor} border-l-4 px-4 py-2 capitalize rounded-sm shadow-sm`}
      style={{ borderLeftColor: `${borderColor}` }}
    >
      <p className="text-gray-600">{heading}</p>
      <p className="text-xl font-bold">${amount}</p>
    </section>
  );
};
