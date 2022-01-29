import { Link } from "react-router-dom";
import { BsFillCartFill } from 'react-icons/bs'

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <Link to="/home">Home</Link> | <Link to="/products">Products</Link> | {" "}
      <Link to="/cart"><BsFillCartFill />(1)</Link>
    </div>
  );
};

export default NavigationBar;
