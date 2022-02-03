import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Button } from "@mui/material";
import Home from "./pages/Home";

function App() {
  return (
    <React.Fragment>
    {/* navbar section */}
      <NavBar />
      <div style={{ margin: "10px" }}>
        <Button variant="contained" color="success">
          +ADD
        </Button>
      </div>
      <Home/>
    </React.Fragment>
  );
}

export default App;



{/* <BrowserRouter>
<Switch>
  <Route path="/manatee">
    <Manatee />
  </Route>
  <Route path="/narwhal">
    <Narwhal />
  </Route>
  <Route path="/whale">
    <Whale />
  </Route>
</Switch>
</BrowserRouter> */}