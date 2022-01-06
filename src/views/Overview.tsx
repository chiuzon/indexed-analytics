import { useStore } from "$/store"
import { observer } from "mobx-react-lite"
import { useEffect } from "react"

import TestComponent from "$/components/TestComponent"

const Overview = observer(() => {

  const { textFetch: {state, text, testFetch}} = useStore()

  // useEffect(() => {
  //   testFetch()
  // }, [])

  return (
    <>
      <h1>HelloWorld</h1>
      {state}
      {text}

      <hr />

      <TestComponent />
    </>
  )
})

export default Overview