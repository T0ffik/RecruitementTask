import { assign, fromPromise, setup } from "xstate";
import {
  ProductsState,
  TApiResponse,
  TEventsProducts,
} from "@customTypes/types";
import { fetchData } from "@api/fetchData";
import { assignId, assignPage, clearState } from "./actions";

export const initialContext = {
  page: 1,
  per_page: undefined,
  total: undefined,
  total_pages: undefined,
  data: [],
  support: undefined,
  errorMessage: undefined,
  id: undefined,
};

const getData = (data: TApiResponse): ProductsState => {
  const productsData = Array.isArray(data.data) ? data.data : [data.data];
  return { ...data, data: productsData };
};

export const productsMachine = setup({
  types: {
    context: {} as ProductsState,
    events: {} as TEventsProducts,
  },
  actors: {
    fetchData: fromPromise<ProductsState, ProductsState>(async ({ input }) => {
      const data = await fetchData(input?.id, input?.page);
      const results = getData(data);
      return results;
    }),
  },
  actions: {
    clearState: assign(clearState),
    getById: assign({ id: (e) => assignId(e) }),
    getByPage: assign({ page: (e) => assignPage(e) }),
  },
}).createMachine({
  id: "Products",
  initial: "noProducts",
  context: initialContext,
  states: {
    noProducts: {
      on: {
        GetProducts: {
          target: "loadingProducts",
        },
        GetProductsByPage: {
          target: "loadingProducts",
          actions: "getByPage",
        },
        GetProductById: {
          target: "loadingProducts",
          actions: "getById",
        },
      },
    },
    loadingProducts: {
      invoke: {
        id: "loadProducts",
        src: "fetchData",
        input: ({ context }) => ({ ...context }),
        onDone: {
          target: "fetchedProducts",
          actions: assign(({ event }) => ({
            ...event.output,
            id: undefined,
          })),
        },
        onError: {
          target: "error",
          actions: assign({
            errorMessage: ({ event }) => event.error as string,
          }),
        },
      },
    },
    fetchedProducts: {
      on: {
        GetProductsByPage: {
          target: "loadingProducts",
          actions: "getByPage",
        },
        GetProductById: {
          target: "loadingProducts",
          actions: "getById",
        },
      },
    },
    error: {
      on: {
        ClearData: {
          target: "loadingProducts",
          actions: "clearState",
        },
      },
    },
  },
});
