import React from "react";

type OverviewCardProps = {
  heading: string;
  amount: number;
};

const overviewCards: OverviewCardProps[] = [
  { heading: "current balance", amount: 4836.0 },
  { heading: "income", amount: 4836.0 },
  { heading: "expenses", amount: 4836.0 },
];

const OverviewCard = (): React.JSX.Element => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(200px,_300px))] gap-4 ">
      {overviewCards.map((item, index) => (
        <article key={index} className="p-4 bg-gray-800 shadow-md rounded-lg">
          <p className="text-gray-400 dark:text-gray-400 my-1 uppercase font-semibold">
            {item.heading}
          </p>
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300">
            ${item.amount.toLocaleString()}
          </p>
        </article>
      ))}
    </section>
  );
};

export default OverviewCard;
