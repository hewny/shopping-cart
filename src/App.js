import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

const App = () => {
  const [products, setProducts] = useState([
    {
      image: "apple",
      name: "Honeycrisp Apple",
      price: "$1.58",
      cart: false, 
      quantity: 0,
    },
    {
      image: "avocado",
      name: "Avocado",
      price: "$1.29",
      cart: false, 
      quantity: 0,
    },
    {
      image: "banana",
      name: "Banana",
      price: "$1.50",
      cart: false, 
      quantity: 0,
    },
    {
      image: "garlic",
      name: "Garlic",
      price: "$1.54",
      cart: false, 
      quantity: 0,
    },
    {
      image: "lettuce",
      name: "Lettuce",
      price: "$2.49",
      cart: false, 
      quantity: 0,
    },
    {
      image: "lime",
      name: "Lime",
      price: "$0.79",
      cart: false, 
      quantity: 0,
    },
    {
      image: "redpepper",
      name: "Red Pepper",
      price: "$2.00",
      cart: false, 
      quantity: 0,
    },
    {
      image: "tomato",
      name: "Tomato",
      price: "$0.29",
      cart: false, 
      quantity: 0,
    },
  ]);

  return (
    <BrowserRouter>
      <NavigationBar products={products}/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
        <Route path="/cart" element={<Cart products={products}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
