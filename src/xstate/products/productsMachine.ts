import { assign, fromPromise, setup } from "xstate";
import { ProductsState, TApiResponse } from "../../utils/types";
import { fetchData } from "../../api/fetchData";

export const productsMachine = setup({
  types: {
    context: {} as ProductsState,
    events: {} as
      | { type: "ChangePage"; page: number }
      | { type: "Filter"; id?: number },
  },
  actors: {
    fetchData: fromPromise(async ({ input }) => {
      const data = await fetchData(input?.id, input?.page);
      let results: TApiResponse;
      if (Array.isArray(data.data)) {
        results = data;
      } else {
        results = { ...data, data: [data.data] };
      }
      return results;
    }),
  },
  actions: {
    assignId: assign({ id: (e) => e.event.id }),
    assignPage: assign({ page: (e) => e.event.page }),
  },
}).createMachine({
  id: "Products",
  initial: "loadingProducts",
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
    loadingProducts: {
      invoke: {
        id: "loadProducts",
        src: "fetchData",
        input: ({ context: { id, page } }) => ({ id, page }),
        onDone: {
          target: "fetchedProducts",
          actions: assign(({ event }) => ({ ...event.output, id: undefined })),
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
