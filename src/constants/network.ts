import { ENetworks } from "$/store";
import { providers } from "ethers";
import { INetworksData } from "./types";

export const NetworksData: INetworksData = {
  [ENetworks.ethereum]: {
    name: "Ethereum",
    provider: new providers.JsonRpcProvider(""),
    explorer: "https://etherscan.io",
    subgraph: {
      id: "Qmca1arSe9U94sHVpzzdUKizNyqFddsXnBZYqkALmSdSRE",
      url: "https://api.thegraph.com/subgraphs/name/indexed-finance/indexed",
    },
  },
};
