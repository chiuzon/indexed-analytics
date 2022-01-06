import { FC, useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Providers from './Providers'
import Layout from './components/Layout'

import Overview from './views/Overview';
import IndexPools from './views/IndexPools';
import RouteWrapper from './components/Wrappers/RouteWrapper';

function App() {
  return (
    <Providers >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={
              <RouteWrapper />
            } />
            <Route path=":network">
                <Route index element={<RouteWrapper children={<Overview />} />} />
                <Route path="pools" element={<RouteWrapper children={<IndexPools />} />} />
                <Route path="pool/:poolId" element={<RouteWrapper children={<IndexPools />} />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  )
}

export default App
