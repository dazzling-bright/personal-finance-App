import MainBodyHeader from "../../components/shared/MainBodyHeader";
import OverviewCard from "./component/OverviewCard";
import OverviewPots from "./component/OverviewPots";

const OverviewPage = () => {
  return (
    <section className="px-4">
      <MainBodyHeader textContent="overview" />
      <OverviewCard />
      <OverviewPots/>
    </section>
  );
};

export default OverviewPage;
