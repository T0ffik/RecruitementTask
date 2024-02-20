import { productsActor } from "../xstate/products/productsActor";
import { idParamName, pageParamName } from "./consts";

export const setParamsToFetch = () => {
  const param = window.location.search.split("=");
  if (param[0].includes(pageParamName)) {
    productsActor.send({ type: "GetProductsByPage", page: Number(param[1]) });
    return;
  }
  if (param[0].includes(idParamName)) {
    productsActor.send({ type: "GetProductById", id: Number(param[1]) });
    return;
  }
  productsActor.send({ type: "GetProducts" });

  return;
};
