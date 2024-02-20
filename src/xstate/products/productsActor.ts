import { createActor } from "xstate";
import { productsMachine } from "./productsMachine";
import { storageProductsState } from "../../utils/consts";

const stateString = localStorage.getItem(storageProductsState);
const restoredState = stateString ? JSON.parse(stateString) : undefined;

export const productsActor = createActor(productsMachine, {
  snapshot: restoredState,
});

productsActor.subscribe(() => {
  const persistedState = productsActor.getPersistedSnapshot();
  localStorage.setItem(storageProductsState, JSON.stringify(persistedState));
});

productsActor.start();
