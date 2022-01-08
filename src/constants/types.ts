import { providers } from "ethers";

export interface INetworksData {
  [key: string]: {
    name: string;
    provider: providers.JsonRpcProvider;
    explorer: string;
    subgraph: {
      id: string;
      url: string;
    };
  };
}

export interface IIndexPools {
  [key: string]: {
    [key: string]: {
      ndxId: string;
      ticker: string;
      name: string;
      description: string;
    };
  };
}
