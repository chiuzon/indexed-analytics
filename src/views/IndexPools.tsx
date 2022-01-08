import { useAppStore } from "$/store";
import { useMemo } from "react";

import IndexPools from "$/constants/indexPools";
import { observer } from "mobx-react-lite";
import IndexPoolsListElement from "$/components/IndexPools/IndexPoolsListElement";

const IndexPoolsView = observer(() => {
  const { activeNetwork } = useAppStore();

  const indexPoolsList = useMemo(() => {
    return Object.keys(IndexPools[activeNetwork]).map((poolId, index) => (
      <IndexPoolsListElement
        key={poolId}
        index={index}
        indexPoolId={poolId}
        activeNetwork={activeNetwork}
      />
    ));
  }, [activeNetwork]);

  return (
    <>
      <div className="container mx-auto w-full px-10">
        <h1 className="text-primary-content text-2xl p-5">Index Pools</h1>
        <hr className="p-2" />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>TVL</th>
              </tr>
            </thead>
            <tbody>{indexPoolsList}</tbody>
          </table>
        </div>
      </div>
    </>
  );
});

export default IndexPoolsView;
