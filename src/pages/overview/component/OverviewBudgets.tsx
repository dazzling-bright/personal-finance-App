import OverviewSectionContainer from "../../../components/shared/OverviewSectionContainer";
import OverviewSectionHeader from "../../../components/shared/OverviewSectionHeader";
import OverviewBudgetChart from "./OverviewBudgetChart";

const OverviewBudgets: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewSectionHeader
        headerText="Budgets"
        hyperlinkText="See Details"
        url="budgets"
      />
      <OverviewBudgetChart />
    </OverviewSectionContainer>
  );
};

export default OverviewBudgets;
