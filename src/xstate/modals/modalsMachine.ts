import { assertEvent, assign, setup } from "xstate";
import { ModalsState, TEventsModals } from "@customTypes/types";

export const modalsMachine = setup({
  types: {
    context: {} as ModalsState,
    events: {} as TEventsModals,
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
