import { request, RequestDocument, gql } from "graphql-request";
import useSWR from "swr";

function useQuery(query: typeof gql | any[], apiURI?: string) {
  const fetcher = (query: RequestDocument, variables: any) =>
    request(
      apiURI ||
        "https://api.thegraph.com/subgraphs/name/indexed-finance/indexed",
      query,
      variables
    );
  const swrObject = useSWR(query, fetcher);

  return swrObject;
}

export default useQuery;
