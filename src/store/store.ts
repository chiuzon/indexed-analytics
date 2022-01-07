import { makeAutoObservable } from "mobx"
import AppState from "./slices/appState"



class StoreFactory {
  appState: AppState = new AppState()

  constructor() {
    makeAutoObservable(this, {} , { autoBind: true })
  }
}

const store = new StoreFactory()

export { store }

