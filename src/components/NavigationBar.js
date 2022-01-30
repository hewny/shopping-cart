import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useState } from 'react'

const NavigationBar = (props) => {
  const { products } = props;
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => {
      setDisplay(!display)
  }

  const SideBar = () => {
    return (
      <div className={`sidebar-container${display ? "-active" : "-hidden"}`}>
          <button onClick={toggleDisplay}>X</button> <br></br>
          rest of cart
      </div>
  )
  }

  let total = products.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div className="NavigationBar">
      <Link to="/home">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <button onClick={toggleDisplay}><BsFillCartFill />({total})</button>
      <SideBar />
    </div>
  );
};

export default NavigationBar;