import { ENetworks } from "$/store";

const IndexPools = {
  [ENetworks.ethereum]: {
    "0x126c121f99e1e211df2e5f8de2d96fa36647c855": {
      ndx: "degen-index",
      ticker: "DEGEN",
      name: "DEGEN Index",
      description:
        "A higher risk/reward index of promising Ethereum protocols that are judged as having significant room to grow.",
    },
    "0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465": {
      ndxId: "nft-platform-index",
      ticker: "NFTP",
      name: "NFT Platform Index",
      description:
        "A collectors index of governance and protocol tokens drawn from both the NFT space and the wider Metaverse.",
    },
    "0xd6cb2adf47655b1babddc214d79257348cbc39a7": {
      ndxId: "oracle-top-5-tokens-index",
      ticker: "ORACL5",
      name: "Oracle Top 5 Tokens Index",
      description:
        "An index representing the current market leaders in protocols designed to bring external/real-world data onto the blockchain.",
    },
  },
  [ENetworks.testnet]: {
    "": {
      ndx: "degen-index",
      ticker: "DEGEN",
      name: "DEGEN Index",
      description:
        "A higher risk/reward index of promising Ethereum protocols that are judged as having significant room to grow.",
    },
  },
};

export default IndexPools;
