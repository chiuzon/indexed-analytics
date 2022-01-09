import { generateDailySnaposhootQuery } from "./../../helpers/generatorHelper";
import { gql } from "graphql-request";
import { createFetcher } from "$/helpers/fetcherHelper";
import { makeAutoObservable } from "mobx";

export default class TVLSlice {
  tvl: number = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  fetchTVL = () => {
    const fetch = createFetcher();

    // fetch(
    //   gql`
    //     query ($id: String!) {
    //       pool_0: dailyPoolSnapshots(first: 5, where: { id_gte: $id }) {
    //         totalValueLockedUSD
    //       }
    //       secondPool: dailyPoolSnapshots(first: 5, where: { id_gte: $id }) {
    //         totalValueLockedUSD
    //       }
    //     }
    //   `,
    //   { id: "0x126c121f99e1e211df2e5f8de2d96fa36647c855" }
    // ).then((data) => {
    //   console.log(data);
    // });

    const query = generateDailySnaposhootQuery(
      [
        "0x126c121f99e1e211df2e5f8de2d96fa36647c855",
        "0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465",
        "0xd6cb2adf47655b1babddc214d79257348cbc39a7",
      ],
      ["totalValueLockedUSD"]
    );

    console.log(query);

    fetch(
      gql`
        ${query}
      `,
      {
        id_0: "0x126c121f99e1e211df2e5f8de2d96fa36647c855",
        id_1: "0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465",
        id_2: "0xd6cb2adf47655b1babddc214d79257348cbc39a7",
      }
    ).then((val) => {
      console.log(val);
    });
  };
}
