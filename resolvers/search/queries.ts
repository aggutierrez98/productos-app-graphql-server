import { IResolvers } from "@graphql-tools/utils";
import { search } from "../../database/search";
import { ContextInterface } from "../../interfaces";
import { SearchResponse } from "../../interfaces/search";

const resolvers: IResolvers<any, ContextInterface> = {
  Query: {
    async search(_: void, params, { error: contextError }): SearchResponse {
      if (contextError) throw contextError.message;

      const { results, error, ok } = await search(params);

      if (ok) {
        return { results };
      } else {
        throw error!.message;
      }
    },
  },
};

export default resolvers;
