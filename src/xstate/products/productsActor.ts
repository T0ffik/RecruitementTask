import { createActor } from "xstate";
import { productsMachine } from "./productsMachine";
import { pageNumberQueryParameterKey } from "../../utils/consts";

const stateString = localStorage.getItem(pageNumberQueryParameterKey);
const restoredState = stateString ? JSON.parse(stateString) : undefined;

export const productsActor = createActor(productsMachine, {
  snapshot: restoredState,
});

productsActor.subscribe(() => {
  const persistedState = productsActor.getPersistedSnapshot();
  localStorage.setItem(
    pageNumberQueryParameterKey,
    JSON.stringify(persistedState)
  );
});

productsActor.start();
