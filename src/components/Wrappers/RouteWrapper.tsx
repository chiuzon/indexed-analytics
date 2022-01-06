import { ENetworks, useStore } from "$/store"
import { observer } from "mobx-react-lite"
import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const RouteWrapper: FC = observer(({children}) => {  
  const params = useParams<{network: string}>()
  const navigate = useNavigate()

  const {setCurrentNetwork} = useStore()

  useEffect(() => {
    if(!params.network){
      setCurrentNetwork(ENetworks['ethereum'])
      navigate('/ethereum/')
      return;
    }

    if(Object.keys(ENetworks).includes(params.network)){
      setCurrentNetwork(ENetworks[params.network as ENetworks])
      return;
    }

    navigate('/ethereum/')
  }, [])

  return (
    <>
      {children}
    </>
  )
});

export default RouteWrapper