import { id, page } from "../../utils/consts";

export const assignId = (action) => {
  window.history.replaceState("filter", "", `?${id}=${action.event.id}`);
  return action.event.id;
};
export const assignPage = (action) => {
  window.history.replaceState(
    "pagination",
    "",
    `?${page}=${action.event.page}`
  );
  return action.event.page;
};
