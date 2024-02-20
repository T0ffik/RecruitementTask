import { assign, fromPromise, setup } from "xstate";
import { ProductsState, TApiResponse, TEvents } from "../../types/types";
import { fetchData } from "../../api/fetchData";
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
    clearState: assign(clearState),
    assignId: assign({ id: (e) => assignId(e) }),
    assignPage: assign({ page: (e) => assignPage(e) }),
    getById: assign({ id: (e) => e.event.id }),
    getByPage: assign({ page: (e) => e.event.page }),
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
        ClearData: {
          target: "loadingProducts",
          actions: "clearState",
        },
      },
    },
  },
});
