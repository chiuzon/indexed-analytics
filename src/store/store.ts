import { makeAutoObservable } from "mobx";
import AppState from "./slices/appState";
import TVLSlice from "./slices/tvlSlice";

class StoreFactory {
  appState: AppState = new AppState();
  tvlSlice: TVLSlice = new TVLSlice();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

const store = new StoreFactory();

export { store };
