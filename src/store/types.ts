
export enum ENetworks {
  ethereum = "ethereum",
  testnet = "testnet"
}


export interface IGlobalState {
  currentNetwork: ENetworks,
}