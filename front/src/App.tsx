import React from 'react';
import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import Footer from "./components/Footer";
import {Container} from "react-bootstrap";
import FluidExample from "./components/FluidExample";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <FluidExample/>
        <Container className="my-4">
            <Table/>
        </Container>
      <Footer/>

    </div>
  );
}

export default App;
