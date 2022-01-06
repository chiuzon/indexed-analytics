import { action, autorun, makeAutoObservable } from 'mobx';

import { ENetworks, IGlobalState } from './types';

const resourcePath = 'https://raw.githubusercontent.com/avkonst/hookstate/master/CNAME';
const fetchResource = () => fetch(resourcePath)
    .then(r => r.text())

class AsyncSlice {
  text = ''
  state = "pending"

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  testFetch() {
    this.state = "pending"
    fetchResource().then(action("fetchSuccess", (data) => {
      this.text = data
      this.state = "done"
    }), action("fetchFailed", (error) => {
      this.state = "error"
    }))
  }
}

class StoreFactory {

  currentNetwork = ENetworks.ethereum
  textFetch = new AsyncSlice()

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setCurrentNetwork = (network: ENetworks) => {
    this.currentNetwork = network
  }
}

const store = new StoreFactory()

autorun(() => {
    store.textFetch.testFetch()
})


export const useStore = () => store


export * from './types'