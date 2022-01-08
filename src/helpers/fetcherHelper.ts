import request, { RequestDocument } from "graphql-request";

export function createFetcher(apiURI?: string) {
  return (query: RequestDocument, variables: any) =>
    request(
      apiURI ||
        "https://api.thegraph.com/subgraphs/name/indexed-finance/indexed",
      query,
      variables
    );
}
