import { useStore } from "$/store"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"

import {blockNearTimestamp, provider} from '$/utils/etherUtils'

import TestComponent from "$/components/TestComponent"

const Overview = observer(() => {


  useEffect(() => {
    async function test() {
      const _latestBlock = await (await provider.getBlock((await provider.getBlockNumber()))).timestamp

      const _b = Math.floor(Date.now() / 1000) - 100

      const blockNumber = await blockNearTimestamp(_b, _latestBlock - 10000, _latestBlock, _latestBlock )

      console.log(blockNumber)
    }

    test()
  }, [])

  return (
    <>
      <h1>HelloWorld</h1>

    </>
  )
})

export default Overview