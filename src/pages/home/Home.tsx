import { Button } from "@mui/material";
import { useSelector } from "@xstate/react";
import { productsActor } from "../../xstate/productsActor";
import { ProductsTable } from "../../components/Table";

export const Home = () => {
  const state = useSelector(productsActor, (state) => state);
  return (
    <div>
      {JSON.stringify(state.value)}
      <Button variant="contained" onClick={() => console.log("Hello to you!")}>
        Hello world!
      </Button>
      <Button
        variant="contained"
        onClick={() => productsActor.send({ type: "Load" })}
      >
        Load
      </Button>
      <ProductsTable />
    </div>
  );
};
