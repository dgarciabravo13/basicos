import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer"

function App() {
  const fecha = new Date().getFullYear();
  return (
    <>
      <Header titulo="tienda Virtual" />
      <Footer fecha={fecha}/>
    </>
  );
}

export default App;
