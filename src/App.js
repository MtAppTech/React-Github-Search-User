import React from "react";
import Home from "./pages/Home"
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <h1 className="text-center m-4">Github User Search App</h1>
      <Home />
    </Container>
  );
};

export default App;
