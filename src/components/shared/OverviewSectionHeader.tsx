import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

interface OverviewSectionHeaderProps {
  headerText: string;
  hyperlinkText: string;
  url: string;
}
const OverviewSectionHeader: React.FC<OverviewSectionHeaderProps> = ({
  headerText,
  hyperlinkText,
  url,
}) => {
  return (
    <header className="flex justify-between mb-4">
      <h1 className="text-xl font-bold capitalize">{headerText}</h1>
      <Link
        to={url}
        className="flex items-center cursor-pointer text-custom-grey hover:text-sidebar transition-colors"
      >
        <span className="hover:underline hover:underline-offset-2 capitalize">
          {hyperlinkText}
        </span>
        <IoMdArrowDropright className="ml-1" />
      </Link>
    </header>
  );
};

export default OverviewSectionHeader