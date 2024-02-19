import { Button } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Button variant="contained" onClick={() => console.log("Hello to you!")}>
      Hello world!
    </Button>
  );
}

export default App;
