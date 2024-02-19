import { Button } from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/productsActor";

export const Home = () => {
  const state = useSelector(productsActor, (state) => state);
  return (
    <div>
      {JSON.stringify(state.value)}
      {JSON.stringify(state.context.data)}
      {JSON.stringify(state.context.errorMessage)}
      <Button variant="contained" onClick={() => console.log("Hello to you!")}>
        Hello world!
      </Button>
      <Button
        variant="contained"
        onClick={() => productsActor.send({ type: "Load" })}
      >
        Load
      </Button>
    </div>
  );
};
