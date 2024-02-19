import { assign, setup } from "xstate";
import { ModalsState, TProduct } from "../../utils/types";

export const modalsMachine = setup({
  types: {
    context: {} as ModalsState,
    events: {} as
      | { type: "openModal"; data: TProduct }
      | { type: "closeModal" },
  },
  actions: {
    openModal: assign({ isOpen: true, data: (e) => e.event.data }),
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
