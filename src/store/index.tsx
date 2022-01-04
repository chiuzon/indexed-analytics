import { createState, useState } from '@hookstate/core';

export enum ENetworks {
  ethereum = "ethereum",
  testnet = "testnet"
}

const currentNetwork = createState(ENetworks.ethereum)

export default currentNetwork