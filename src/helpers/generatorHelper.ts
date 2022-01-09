import { gql } from "graphql-request";
/**
 * query ($id: String!) {
          firstPool: dailyPoolSnapshots(first: 5, where: { id_gte: $id }) {
            totalValueLockedUSD
          }
          secondPool: dailyPoolSnapshots(first: 5, where: { id_gte: $id }) {
            totalValueLockedUSD
          }
        }
 */

export const generateDailySnapshootQuery = (
  ids: string[],
  output: string[]
) => {
  const genFunctionName = (id: string) => {
    return `dailyPoolSnapshots(first: 5, where: { id_gte: ${id}}) {
      ${output.join("\n")}
    }`;
  };

  const idArgumentNames = ids.map((_val, i) => `$id_${i}`);

  const argumentsWithTypes = idArgumentNames.map(
    (_val) => `${_val}:String!
  `
  );

  const _c = ids.map(
    (_val, i) => `
    pool_${i}: ${genFunctionName(idArgumentNames[i])}
  `
  );

  return `
    query (${argumentsWithTypes.join(",")}){
      ${_c.join("\n")}
    }
  `;
};
