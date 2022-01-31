import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from "react";
import Sidebar from "./Sidebar";

const NavigationBar = (props) => {
  const { products, setProducts } = props;
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  let total = products.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div className="NavigationBar">
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <button onClick={toggleDisplay}>
        <BsFillCartFill />({total})
      </button>
      <Sidebar display={display} products={products} setProducts={setProducts} toggleDisplay={toggleDisplay}/>
    </div>
  );
};

export default NavigationBar;
