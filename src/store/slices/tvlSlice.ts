import { generateDailySnapshootQuery } from "./../../helpers/generatorHelper";
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

    const { query, params } = generateDailySnapshootQuery(
      [
        "0x126c121f99e1e211df2e5f8de2d96fa36647c855",
        "0x68bb81b3f67f7aab5fd1390ecb0b8e1a806f2465",
        "0xd6cb2adf47655b1babddc214d79257348cbc39a7",
      ],
      ["totalValueLockedUSD"]
    );

    console.log(params());

    fetch(
      gql`
        ${query}
      `,
      params()
    ).then((val) => {
      console.log(val);
    });
  };
}
