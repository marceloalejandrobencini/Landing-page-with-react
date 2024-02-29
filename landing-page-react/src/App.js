import React from "react";
import { Navbar } from "./components/Navbar";
import { Jumbotron } from "./components/Jumbotron";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container">
        <Jumbotron />
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default App;