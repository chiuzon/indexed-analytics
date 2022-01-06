import { useStore } from "$/store";
import { observer } from "mobx-react-lite";



const TestComponent = observer(() => {

  const { textFetch: {state, text}} = useStore()

  return (
    <>
        State: {state}
        Text: {text}
    </>
  )
})

export default TestComponent