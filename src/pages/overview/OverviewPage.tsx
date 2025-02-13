import MainBodyHeader from "../../components/shared/MainBodyHeader";
import OverviewCard from "./OverviewCard";

const OverviewPage = () => {
  return (
    <section className="px-4">
      <MainBodyHeader textContent="overview" />
      <OverviewCard />
    </section>
  );
};

export default OverviewPage;
