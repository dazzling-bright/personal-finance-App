import { create } from "zustand";

// Define the type for the state and actions
interface SidebarState {
  isMinimized: boolean;
  toggleSidebar: () => void;
}

// Create the Zustand store
const useMinimizeSidebar = create<SidebarState>((set) => ({
  isMinimized: false,
  toggleSidebar: () => set((state) => ({ isMinimized: !state.isMinimized })),
}));

export default useMinimizeSidebar;
