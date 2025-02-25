import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryLegend,
  VictoryContainer,
} from "victory";

// Sample data for budget, transactions, and recurring bills
const data = [
  { month: 1, budget: 5000, transactions: 3000, recurringBills: 1000 },
  { month: 2, budget: 5500, transactions: 3200, recurringBills: 1100 },
  { month: 3, budget: 6000, transactions: 3500, recurringBills: 1200 },
  { month: 4, budget: 5800, transactions: 3400, recurringBills: 1150 },
  { month: 5, budget: 6200, transactions: 3600, recurringBills: 1300 },
  { month: 6, budget: 6300, transactions: 3700, recurringBills: 1350 },
];

const OverviewBudgetChart = () => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <VictoryChart containerComponent={<VictoryContainer responsive />}>
        {/* X-Axis: Months */}
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
          style={{
            tickLabels: { angle: -45, textAnchor: "end" },
          }}
        />

        {/* Y-Axis: Amount */}
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => `$${tick / 1000}k`} // Format as $1k, $2k, etc.
        />

        {/* Line for Budget */}
        <VictoryLine
          data={data}
          x="month"
          y="budget"
          style={{ data: { stroke: "#4caf50", strokeWidth: 2 } }} // Green
        />

        {/* Line for Transactions */}
        <VictoryLine
          data={data}
          x="month"
          y="transactions"
          style={{ data: { stroke: "#2196f3", strokeWidth: 2 } }} // Blue
        />

        {/* Line for Recurring Bills */}
        <VictoryLine
          data={data}
          x="month"
          y="recurringBills"
          style={{ data: { stroke: "#f44336", strokeWidth: 2 } }} // Red
        />

        {/* Legend */}
        <VictoryLegend
          x={50}
          y={10}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: "Budget", symbol: { fill: "#4caf50" } },
            { name: "Transactions", symbol: { fill: "#2196f3" } },
            { name: "Recurring Bills", symbol: { fill: "#f44336" } },
          ]}
        />
      </VictoryChart>
    </div>
  );
};

export default OverviewBudgetChart;
