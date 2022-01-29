import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
