import { IoMdArrowDropright } from "react-icons/io";
import { TbReportMoney } from "react-icons/tb";
import { Link } from "react-router-dom";

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
    <article className="my-4 p-4 lg:p-8 bg-white rounded-lg">
      <OverviewPotHeader />

      <section className="grid md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
        <OverviewPotCard />
        <OverviewPotSecondaryCards />
      </section>
    </article>
  );
};

export default OverviewPots;

const OverviewPotHeader = () => {
  return (
    <header className="flex justify-between mb-4">
      <h1 className="text-xl font-bold">Pots</h1>
      <Link
        to="pots"
        className="flex items-center cursor-pointer text-custom-grey hover:text-sidebar transition-colors"
      >
        <span className="hover:underline hover:underline-offset-2">
          See Details
        </span>
        <IoMdArrowDropright className="ml-1" />
      </Link>
    </header>
  );
};

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
    <section className="bg-main-pages-background rounded-2xl p-4 flex gap-4 items-center ">
      <TbReportMoney className="text-4xl text-custom-torquoise" />

      <div>
        <p className="text-gray-800">Total Saved</p>
        <p className="text-2xl font-bold">$850</p>
      </div>
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
      style={{ borderLeftColor: `${borderColor}`}}
    >
      <p className="text-gray-600">{heading}</p>
      <p className="text-xl font-bold">${amount}</p>
    </section>
  );
};
