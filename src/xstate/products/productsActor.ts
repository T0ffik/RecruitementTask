import { createActor } from "xstate";
import { productsMachine } from "./productsMachine";

export const productsActor = createActor(productsMachine);

productsActor.start();
