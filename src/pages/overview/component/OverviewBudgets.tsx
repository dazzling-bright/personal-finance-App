import OverviewSectionContainer from "../../../components/shared/OverviewSectionContainer";
import OverviewSectionHeader from "../../../components/shared/OverviewSectionHeader";

const OverviewBudgets: React.FC = () => {
  return (
    <OverviewSectionContainer>
      <OverviewSectionHeader
        headerText="budgets"
        hyperlinkText="see details"
        url="budgets"
      />
     
    </OverviewSectionContainer>
  );
};

export default OverviewBudgets;


