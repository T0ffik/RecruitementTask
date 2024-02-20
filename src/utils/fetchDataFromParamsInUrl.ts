import { productsActor } from "../xstate/products/productsActor";
import { id, page } from "./consts";

export const fetchFromParams = () => {
  const param = window.location.search.split("=");
  if (param[0].includes(page)) {
    productsActor.send({ type: "ChangePage", page: Number(param[1]) });
  } else if (param[0].includes(id)) {
    productsActor.send({ type: "Filter", id: Number(param[1]) });
  }
};
