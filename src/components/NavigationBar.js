import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";

const NavigationBar = (props) => {
  const { products } = props;

  let total = products.reduce((sum, product) => {
    return sum + product.quantity;
  }, 0);

  return (
    <div className="NavigationBar">
      <Link to="/home">Home</Link> | <Link to="/products">Products</Link> |{" "}
      <Link to="/cart">
        <BsFillCartFill />({total})
      </Link>
    </div>
  );
};

export default NavigationBar;
