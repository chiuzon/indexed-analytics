import { store } from "./store";

export const useStore = () => store;
export const useAppStore = () => store.appState;
export const useTVLSlice = () => store.tvlSlice;
