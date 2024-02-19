import { Button } from "@mui/material";
import "./App.css";
import { useMachine } from "@xstate/react";
import { productsMachine } from "./xstate/productsMachine";

function App() {
  const [state, send] = useMachine(productsMachine);
  return (
    <div>
      {JSON.stringify(state.value)}
      <Button variant="contained" onClick={() => console.log("Hello to you!")}>
        Hello world!
      </Button>
      <Button variant="contained" onClick={() => send({ type: "Load" })}>
        Load
      </Button>
    </div>
  );
}

export default App;
