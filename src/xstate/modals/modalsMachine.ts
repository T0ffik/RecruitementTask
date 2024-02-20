import { assertEvent, assign, setup } from "xstate";
import { ModalsState, TProduct } from "../../types/types";

export const modalsMachine = setup({
  types: {
    context: {} as ModalsState,
    events: {} as
      | { type: "openModal"; data: TProduct }
      | { type: "closeModal" },
  },
  actions: {
    openModal: assign({
      isOpen: true,
      data: (e) => {
        assertEvent(e.event, "openModal");
        return e.event.data;
      },
    }),
    closeModal: assign({ isOpen: false, data: undefined }),
  },
}).createMachine({
  id: "Modals",
  initial: "closedModal",
  context: {
    isOpen: false,
    data: undefined,
  },
  states: {
    closedModal: {
      on: {
        openModal: {
          target: "openedModal",
          actions: "openModal",
        },
      },
    },
    openedModal: {
      on: {
        closeModal: {
          target: "closedModal",
          actions: "closeModal",
        },
      },
    },
  },
});
