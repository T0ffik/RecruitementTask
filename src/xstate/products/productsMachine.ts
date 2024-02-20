import { assign, fromPromise, setup } from "xstate";
import { ProductsState, TApiResponse, TEvents } from "../../types/types";
import { fetchData } from "../../api/fetchData";
import { assignId, assignPage } from "./actions";

const initialContex = {
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
    events: {} as TEvents,
  },
  actors: {
    fetchData: fromPromise<ProductsState, ProductsState>(async ({ input }) => {
      const data = await fetchData(input?.id, input?.page);
      const results = getData(data);
      return results;
    }),
  },
  actions: {
    assignId: assign({ id: (e) => assignId(e) }),
    assignPage: assign({ page: (e) => assignPage(e) }),
  },
}).createMachine({
  id: "Products",
  initial: "loadingProducts",
  context: initialContex,
  states: {
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
        Filter: {
          target: "loadingProducts",
          actions: "assignId",
        },
        ChangePage: {
          target: "loadingProducts",
          actions: "assignPage",
        },
      },
    },
    error: {
      on: {
        Filter: {
          target: "loadingProducts",
          actions: "assignId",
        },
        ChangePage: {
          target: "loadingProducts",
          actions: "assignPage",
        },
      },
    },
  },
});
