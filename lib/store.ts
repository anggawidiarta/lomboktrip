/* eslint-disable @typescript-eslint/no-unused-vars */
// zustand store example
import { create } from "zustand";

type Action = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const useCountStore = create<Action>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
