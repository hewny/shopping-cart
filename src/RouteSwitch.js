import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
