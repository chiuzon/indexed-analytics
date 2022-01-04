import { FC, useEffect, useState } from 'react'

import Providers from './Providers'
import Layout from './components/Layout'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Overview from './views/Overview';
import IndexPools from './views/IndexPools';

import currentNetwork, { ENetworks } from './store';

const DefaultRouteNetworkSetter: FC = ({children}) => {
  useEffect(() => {
      currentNetwork.set(ENetworks.ethereum)
  }, [])

  return (
    <>
      {children}
    </>
  )
}

const RouteNetworkSetter: FC = ({children}) => {
  const params = useParams<{network: string}>()

  useEffect(() => {
    if(params.network)
      currentNetwork.set(ENetworks[params.network as ENetworks])
  }, [])

  return (
    <>
      {children}
    </>
  )
}


function App() {
 
  return (
    <Providers >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={
              <DefaultRouteNetworkSetter>
                  <Navigate to={"/ethereum/"} />
              </DefaultRouteNetworkSetter>
            } />
            <Route path=":network">
                <Route index element={<RouteNetworkSetter children={<Overview />} />} />
                <Route path="pools" element={<RouteNetworkSetter children={<IndexPools />} />} />
                <Route path="pool/:poolId" element={<RouteNetworkSetter children={<IndexPools />} />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  )
}

export default App
