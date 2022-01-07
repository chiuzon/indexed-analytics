import { ENetworks } from "$/store";
import { providers } from "ethers";
import { INetworksData } from "./types";

import {
  GovernanceSubgraphClient,
  IndexedCoreSubgraphClient,
  IndexedDividendsSubgraphClient,
  IndexedStakingSubgraphClient,
  MasterChefSubgraphClient,
  NirnSubgraphClient,
} from "@indexed-finance/subgraph-clients";

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

export const SubgraphClients = {
  [ENetworks.ethereum]: {
    V1: {
      IndexedStakingSubgraphClient:
        IndexedStakingSubgraphClient.forNetwork("mainnet"),
      IndexedCoreSubgraphClient:
        IndexedCoreSubgraphClient.forNetwork("mainnet"),
      MasterChefSubgraphClient: MasterChefSubgraphClient.forNetwork("mainnet"),
      IndexedDividendsSubgraphClient:
        IndexedDividendsSubgraphClient.forNetwork("mainnet"),
      NirnSubgraphClient: NirnSubgraphClient.forNetwork("mainnet"),
      governance: {
        CompoundGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("compound"),
        UniGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("uniswap"),
        IndexedGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("indexed"),
      },
    },
  },
  [ENetworks.testnet]: {
    V1: {
      IndexedStakingSubgraphClient:
        IndexedStakingSubgraphClient.forNetwork("rinkeby"),
      IndexedCoreSubgraphClient:
        IndexedCoreSubgraphClient.forNetwork("rinkeby"),
      MasterChefSubgraphClient: MasterChefSubgraphClient.forNetwork("rinkeby"),
      IndexedDividendsSubgraphClient:
        IndexedDividendsSubgraphClient.forNetwork("rinkeby"),
      NirnSubgraphClient: NirnSubgraphClient.forNetwork("rinkeby"),
      governance: {
        CompoundGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("compound"),
        UniGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("uniswap"),
        IndexedGovernanceSubgraphClient:
          GovernanceSubgraphClient.forProtocol("indexed"),
      },
    },
  },
};
