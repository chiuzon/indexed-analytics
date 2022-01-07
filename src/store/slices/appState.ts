import { makeAutoObservable } from 'mobx';
import { ENetworks } from "../types";



export default class AppState {
  public activeNetwork: ENetworks = ENetworks.ethereum

  constructor(){
    makeAutoObservable(this, {} , { autoBind: true })
  }

  public setActiveNetwork = (network: ENetworks) => this.activeNetwork = network
}


