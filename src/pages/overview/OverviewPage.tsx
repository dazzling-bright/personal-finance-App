import MainBodyHeader from "../../components/shared/MainBodyHeader";
import OverviewBudgets from "./component/OverviewBudgets";
import OverviewCard from "./component/OverviewCard";
import OverviewPots from "./component/OverviewPots";
import OverviewRecurringBills from "./component/OverviewRecurringBills";
import OverviewTransactions from "./component/OverviewTransactions";

const OverviewPage = () => {
  return (
    <section className="px-4 flex-1">
      <MainBodyHeader textContent="overview" />
      <OverviewCard />
      <OverviewPots />
      <OverviewTransactions />
      <OverviewBudgets />
      <OverviewRecurringBills />
    </section>
  );
};

export default OverviewPage;
