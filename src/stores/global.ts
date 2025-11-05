import { create } from "zustand";
import { persist } from "zustand/middleware";

interface GlobalState {
  primaryColor: string;
  setColor: (color: string) => void;
}

const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      primaryColor: "#247fff",
      setColor: (color) => set(() => ({ primaryColor: color })),
    }),
    {
      name: "primaryColor",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            ["primaryColor"].includes(key)
          )
        ),
    }
  )
);

export default useGlobalStore;
