import { useV1SubgraphClients } from "$/hooks/useSubgraphClient";
import { ENetworks } from "$/store";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import LoadingComponent from "$/components/LoadingComponent";

import useQuery from "$/hooks/useQuery";
import { gql } from "graphql-request";
import IndexPools from "$/constants/indexPools";
import useSWR from "swr";
import { createFetcher } from "$/helpers/fetcherHelper";

interface IndexPoolsListElementProps {
  index: number;
  indexPoolId: string;
  activeNetwork: ENetworks;
}

const IndexPoolsListElement = observer<IndexPoolsListElementProps>(
  ({ index, indexPoolId, activeNetwork }) => {
    const fetcher = createFetcher();

    const { data, error } = useSWR(
      [
        gql`
          query ($id: String!) {
            indexPool(id: $id) {
              totalValueLockedUSD
              totalVolumeUSD
            }
          }
        `,
        { id: indexPoolId },
      ],
      fetcher
    );

    const { name } = IndexPools[activeNetwork][indexPoolId];

    useEffect(() => {
      console.log(error);
      console.log(data);
    }, [data]);

    return (
      <tr>
        <td>{index!}</td>
        <td>{name}</td>
        <td>{data?.indexPool.totalVolumeUSD}</td>
        <td></td>
      </tr>
    );
  }
);

export default IndexPoolsListElement;
