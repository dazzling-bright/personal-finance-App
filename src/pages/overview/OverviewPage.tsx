import MainBodyHeader from "../../components/shared/MainBodyHeader";
import OverviewCard from "./component/OverviewCard";
import OverviewPots from "./component/OverviewPots";
import OverviewTransactions from "./component/OverviewTransactions";

const OverviewPage = () => {
  return (
    <section className="px-4 flex-1">
      <MainBodyHeader textContent="overview" />
      <OverviewCard />
      <OverviewPots />
      <OverviewTransactions />
    </section>
  );
};

export default OverviewPage;
