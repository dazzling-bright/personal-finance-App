import { LuArrowBigLeftDash, LuArrowBigRightDash } from "react-icons/lu";
import useMinimizeSidebar from "../../store/sidebarStore";

const SidebarMinimizeBtn: React.FC = () => {
  const { isMinimized, toggleSidebar } = useMinimizeSidebar();

  return (
    <button
      className="text-white text-center mt-auto mb-8 cursor-pointer flex items-center justify-center gap-2"
      onClick={toggleSidebar}
    >
      {isMinimized ? (
        <LuArrowBigRightDash />
      ) : (
        <footer className="flex items-center gap-2">
          <LuArrowBigLeftDash />
          <span>Minimize Menu</span>
        </footer>
      )}
    </button>
  );
};

export default SidebarMinimizeBtn;
