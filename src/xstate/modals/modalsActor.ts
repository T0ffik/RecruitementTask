import { createActor } from "xstate";
import { modalsMachine } from "./modalsMachine";

export const modalsActor = createActor(modalsMachine);
modalsActor.start();
