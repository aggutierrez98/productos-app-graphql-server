import { IResolvers } from "@graphql-tools/utils";
import { ForbiddenError } from "apollo-server-express";
import {
  createCategory,
  deleteCategory,
  updateCategory,
} from "../../database/categories";
import { ContextInterface, InputError } from "../../interfaces";
import { Category } from "../../models";

const mutation: IResolvers<any, ContextInterface> = {
  Mutation: {
    async createCategory(
      _: void,
      { category },
      { error: contextError }
    ): Promise<Category | InputError> {
      if (contextError) throw contextError;

      const { ok, error, data } = await createCategory(category);

      if (ok) return data!;
      else throw error;
    },
    async updateCategory(
      __: void,
      { category },
      { error: contextError }
    ): Promise<Category | InputError> {
      if (contextError) throw contextError;

      const { ok, error, data } = await updateCategory(category);

      if (ok) return data!;
      else throw error;
    },
    async deleteCategory(
      __: void,
      { id },
      { error: contextError }
    ): Promise<Category | InputError> {
      if (contextError) throw contextError;

      const { ok, error, data } = await deleteCategory(id);

      if (ok) return data!;
      else throw error;
    },
  },
};

export default mutation;
