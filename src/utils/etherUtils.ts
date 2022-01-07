import { ethers } from "ethers"


const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")

async function getTimestampForBlock(blockNr: number) {
  return (await provider.getBlock(blockNr)).timestamp
}

async function blockNearTimestamp(
  unixTimestamp: number,
  preBlock = 1,
  latestBlock: number,
  latestBlockStatic: number
): Promise<any>{  
  const iPre = Math.max(1, preBlock)
  const iPost = Math.max(latestBlockStatic, latestBlock)

  if(iPre == iPost){
    return iPre
  }

  const [t0, t1] = await Promise.all([getTimestampForBlock(iPre), getTimestampForBlock(iPost)]).then(res => [res[0], res[1]])

  const avgBlockTime = (t1 - t0) / (iPost - iPre)

  // if block-times were evenly-spaced, get expected block number
  const k = (unixTimestamp - t0) / (t1 - t0)
  const iExpected = (iPre + k * (iPost - iPre))

   // get the ACTUAL time for that block
  const tExpected = await getTimestampForBlock(iExpected)

  const estNBlocksFromExpectedToTarget = (unixTimestamp - tExpected) / avgBlockTime
  const iExpectedAdj = iExpected + estNBlocksFromExpectedToTarget

  const r = Math.abs(estNBlocksFromExpectedToTarget)

  return blockNearTimestamp(unixTimestamp, iExpectedAdj - r, iExpectedAdj + r, latestBlockStatic)
}


export {
  provider,
  blockNearTimestamp
}