import { fromPromise, setup } from "xstate";
import { ProductsState } from "./types";
import { fetchData } from "../api/fetchData";

export const productsMachine = setup({
  types: {
    context: {} as ProductsState,
  },
  actors: {
    fetchData: fromPromise(async () => {
      const data = await fetchData();

      return data;
    }),
  },
  actions: {
    assignDataToState: (context) => {
      alert(JSON.stringify(context.event));
    },
    throwError: (context) => {
      alert(JSON.stringify(context.event));
    },
  },
}).createMachine({
  id: "Products",
  initial: "noProducts",
  context: {
    page: 1,
    per_page: undefined,
    total: undefined,
    total_pages: undefined,
    data: [],
    support: undefined,
    errorMessage: undefined,
    id: undefined,
  },
  states: {
    noProducts: {
      on: {
        Load: {
          target: "loadingProducts",
        },
      },
    },
    loadingProducts: {
      invoke: {
        id: "loadProducts",
        src: "fetchData",
        onDone: {
          target: "fetchedProducts",
        },
        onError: {
          target: "error",
        },
      },
    },
    fetchedProducts: {},
    error: {},
  },
});
