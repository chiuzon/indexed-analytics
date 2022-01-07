import { providers } from "ethers";



export interface INetworksData {
  [key: string]: {
    name: string,
    provider: providers.JsonRpcProvider,
    explorer: string,
    subgraph: {
      id: string,
      url: string
    }
  }
}