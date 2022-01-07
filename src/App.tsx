import { BrowserRouter, Routes, Route } from "react-router-dom";

import Providers from "./Providers";
import Layout from "./components/Layout";

import OverviewView from "./views/Overview";
import IndexPoolsView from "./views/IndexPools";
import RouteWrapper from "./components/Wrappers/RouteWrapper";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return (
    <Providers>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<RouteWrapper />} />
            <Route path=":network">
              <Route
                index
                element={<RouteWrapper children={<OverviewView />} />}
              />
              <Route
                path="pools"
                element={<RouteWrapper children={<IndexPoolsView />} />}
              />
              <Route
                path="pool/:poolId"
                element={<RouteWrapper children={<OverviewView />} />}
              />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Providers>
  );
});

export default App;
