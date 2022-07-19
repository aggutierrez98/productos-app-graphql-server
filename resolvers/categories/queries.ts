import { IResolvers } from "@graphql-tools/utils";
import { getCategories, getCategory } from "../../database/categories";
import { ContextInterface, CategoryResults } from "../../interfaces";

const query: IResolvers<any, ContextInterface> = {
  Query: {
    async getCategories(
      _: void,
      params,
      { error: contextError }
    ): CategoryResults {
      // if (contextError) return { error: contextError };
      if (contextError) throw contextError.message;

      const [count, categories] = await getCategories(params);
      return { categories, count };
    },
    async getCategory(
      _: void,
      { id },
      { error: contextError }
    ): CategoryResults {
      if (contextError) throw contextError.message;

      const { data, error, ok } = await getCategory(id);

      if (ok) {
        return data!;
      } else {
        throw error!.message;
        // return { error: error! };
      }
    },
  },
};

export default query;
