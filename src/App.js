import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear Listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa Reactjs", precio: 10 },
    { id: 2, nombre: "Camisa Vuejs", precio: 20 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 40 },
  ]);

  const [carrito, setCarrito] = useState([]);

  const fecha = new Date().getFullYear();
  return (
    <>
      <Header titulo="tienda Virtual" />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
      <Producto 
      key={producto.id} 
      producto={producto}
      productos={productos}
      carrito={carrito}
      setCarrito={setCarrito}
      />))
      }
      <Carrito
        carrito={carrito}
        setCarrito={setCarrito}
      />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
