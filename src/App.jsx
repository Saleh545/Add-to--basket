import React, { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
  const [cart, setCart]=useState([])

  const emptyCart = ()=>{
    setCart([])
  }
  return (
    <div className="container mx-auto p-4">

      <Header  cart={cart}/>

      <Products cart={cart} setCart={setCart } />

      <Cart cart={cart} emptyCart={emptyCart} setCart={setCart} />



          </div>
  );
};

export default App;
