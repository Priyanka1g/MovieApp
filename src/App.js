import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Button } from "@mui/material";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* navbar section */}
        <NavBar />
        <div style={{ margin: "10px" }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => (window.location.href = "/add")}
          >
            <AddCircleIcon />
            ADD
          </Button>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
