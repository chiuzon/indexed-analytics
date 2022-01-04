import { useState } from 'react'

import Providers from './Providers'
import Layout from './components/Layout'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Overview from './views/Overview';
import IndexPools from './views/IndexPools';


function App() {
 
  return (
    <Providers >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to={"/ethereum/"} />} />
            <Route path=":network">
                <Route index element={<Overview />} />
                <Route path="pools" element={<IndexPools />} />
                <Route path="pool/:poolId" element={<Overview />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  )
}

export default App
