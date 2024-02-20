import { AssignArgs, assertEvent } from "xstate";
import { ProductsState, TActor, TEventsProducts } from "@customTypes/types";
import { idParamName, pageParamName } from "@utils/consts";
import { initialContext } from "./productsMachine";

export const clearState = (
  action: AssignArgs<ProductsState, TEventsProducts, TEventsProducts, TActor>
): ProductsState => {
  assertEvent(action.event, "ClearData");
  return initialContext;
};

export const assignId = (
  action: AssignArgs<ProductsState, TEventsProducts, TEventsProducts, TActor>
) => {
  assertEvent(action.event, "GetProductById");
  window.history.replaceState(
    "filter",
    "",
    `?${idParamName}=${action.event.id}`
  );
  return action.event.id;
};
export const assignPage = (
  action: AssignArgs<ProductsState, TEventsProducts, TEventsProducts, TActor>
) => {
  assertEvent(action.event, "GetProductsByPage");
  window.history.replaceState(
    "pagination",
    "",
    `?${pageParamName}=${action.event.page}`
  );
  return action.event.page;
};
