import { ENetworks, useAppStore, useStore } from "$/store"
import { observer } from "mobx-react-lite"
import { FC, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const RouteWrapper: FC = observer(({children}) => {  
  const params = useParams<{network: string}>()
  const navigate = useNavigate()

  const {setActiveNetwork} = useAppStore()

  useEffect(() => {
    if(!params.network){
      setActiveNetwork(ENetworks['ethereum'])
      navigate('/ethereum/')
      return;
    }

    if(Object.keys(ENetworks).includes(params.network)){
      setActiveNetwork(ENetworks[params.network as ENetworks])
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