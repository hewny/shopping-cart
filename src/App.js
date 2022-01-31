import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Products from "./components/Products";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 0,
      image: "apple",
      name: "Honeycrisp Apple",
      price: 1.58,
      cart: false, 
      quantity: 0,
    },
    {
      id: 1,
      image: "avocado",
      name: "Avocado",
      price: 1.29,
      cart: false, 
      quantity: 0,
    },
    {
      id: 2,
      image: "banana",
      name: "Banana",
      price: 1.50,
      cart: false, 
      quantity: 0,
    },
    {
      id: 3,
      image: "garlic",
      name: "Garlic",
      price: 1.54,
      cart: false, 
      quantity: 0,
    },
    {
      id: 4,
      image: "lettuce",
      name: "Lettuce",
      price: 2.49,
      cart: false, 
      quantity: 0,
    },
    {
      id: 5,
      image: "lime",
      name: "Lime",
      price: 0.79,
      cart: false, 
      quantity: 0,
    },
    {
      id: 6,
      image: "redpepper",
      name: "Red Pepper",
      price: 2.00,
      cart: false, 
      quantity: 0,
    },
    {
      id: 7,
      image: "tomato",
      name: "Tomato",
      price: 0.29,
      cart: false, 
      quantity: 0,
    },
  ]);

  return (
    <BrowserRouter>
      <NavigationBar products={products} setProducts={setProducts}/>
      <Routes>
        <Route exact path="/" element={<Home />} />s
        <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
