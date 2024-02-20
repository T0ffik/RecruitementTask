import { AssignArgs, assertEvent } from "xstate";
import { ProductsState, TActor, TEvents } from "../../types/types";
import { id, page } from "../../utils/consts";

export const assignId = (
  action: AssignArgs<ProductsState, TEvents, TEvents, TActor>
) => {
  assertEvent(action.event, "Filter");
  window.history.replaceState("filter", "", `?${id}=${action.event.id}`);
  return action.event.id;
};
export const assignPage = (
  action: AssignArgs<ProductsState, TEvents, TEvents, TActor>
) => {
  assertEvent(action.event, "ChangePage");
  window.history.replaceState(
    "pagination",
    "",
    `?${page}=${action.event.page}`
  );
  return action.event.page;
};
