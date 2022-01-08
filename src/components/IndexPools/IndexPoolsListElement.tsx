import { ENetworks } from "$/store";
import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useMemo } from "react";
import LoadingComponent from "$/components/LoadingComponent";
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

    const totalVolumeUSD = useMemo(() => {
      if (data?.indexPool.totalVolumeUSD) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(data?.indexPool.totalVolumeUSD);
      } else {
        return <LoadingComponent />;
      }
    }, [data]);

    const totalValueLockedUSD = useMemo(() => {
      if (data?.indexPool.totalValueLockedUSD) {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(data?.indexPool.totalValueLockedUSD);
      } else {
        return <LoadingComponent />;
      }
    }, [data]);

    //Logging
    useEffect(() => {
      if (error) {
        console.error(`[${IndexPoolsListElement.name}]: ${error}`);
      }
    }, [data]);

    const onPoolClicked = useCallback(() => {
      console.log(indexPoolId);
    }, []);

    return (
      <tr
        onClick={onPoolClicked}
        className="hover:drop-shadow-md hover:cursor-pointer rounded-md select-none"
      >
        <td>{index!}</td>
        <td>{name}</td>
        <td>{totalVolumeUSD}</td>
        <td>{totalValueLockedUSD}</td>
      </tr>
    );
  }
);

export default IndexPoolsListElement;
