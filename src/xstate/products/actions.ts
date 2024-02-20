import { AssignArgs, assertEvent } from "xstate";
import { ProductsState, TActor, TEvents } from "../../types/types";
import { id, page, storageProductsState } from "../../utils/consts";
import { initialContext } from "./productsMachine";

export const clearState = (
  action: AssignArgs<ProductsState, TEvents, TEvents, TActor>
): ProductsState => {
  assertEvent(action.event, "ClearData");
  localStorage.removeItem(storageProductsState);
  return initialContext;
};

export const assignId = (
  action: AssignArgs<ProductsState, TEvents, TEvents, TActor>
) => {
  assertEvent(action.event, "GetProductById");
  window.history.replaceState("filter", "", `?${id}=${action.event.id}`);
  return action.event.id;
};
export const assignPage = (
  action: AssignArgs<ProductsState, TEvents, TEvents, TActor>
) => {
  assertEvent(action.event, "GetProductsByPage");
  window.history.replaceState(
    "pagination",
    "",
    `?${page}=${action.event.page}`
  );
  return action.event.page;
};
