import { useState, useEffect } from "react";
import { BsXLg, BsDashCircle, BsPlusCircle } from "react-icons/bs";
import Images from "../images/index";

const Sidebar = (props) => {
  const { display, products, setProducts, toggleDisplay } = props;
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleChange = (e) => {
    let newProducts = [...products];
    newProducts[e.target.id].quantity = Number(e.target.value);
    setProducts(newProducts);
  };

  const handleBlur = (e) => {
    let newProducts = [...products];
    if (e.target.value === "0") {
      newProducts[e.target.id].cart = false;
      newProducts[e.target.id].quantity = Number(e.target.value);
    } else if (e.target.value === "") {
      newProducts[e.target.id].cart = false;
      newProducts[e.target.id].quantity = 0;
    }
    setProducts(newProducts);
  };

  const handleReduce = (index) => {
    let newProducts = [...products];
    let id = cartItems[index].id;
    if (newProducts[id].quantity === 1) {
      newProducts[id].cart = false;
    }
    newProducts[id].quantity -= 1;
    setProducts(newProducts);
  };

  const handleIncrease = (index) => {
    let newProducts = [...products];
    let id = cartItems[index].id;
    newProducts[id].quantity += 1;
    setProducts(newProducts);
  };

  useEffect(() => {
    setCartItems(products.filter((product) => product.cart === true));
  }, [products]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (prev, current) => prev + current.price * current.quantity,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className={`sidebar-container${display ? "-active" : ""}`}>
      <div className="sidebar-top">
        Cart{" "}
        <button onClick={toggleDisplay}>
          <BsXLg />
        </button>
      </div>
      <div className="sidebar-contents">
        {cartItems.length === 0 ? "Cart is empty" : ""}
        {cartItems.map((item, index) => (
          <div className="sidebar-item" key={index}>
            <img src={Images[item.image]} alt={item.name}></img>
            <span>{item.name}</span>
            <br></br>
            <BsDashCircle onClick={() => handleReduce(index)} />
            <input
              type="text"
              id={item.id}
              action="custom value"
              value={item.quantity}
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            ></input>
            <BsPlusCircle onClick={() => handleIncrease(index)} />
            <span className="sidebar-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="sidebar-bottom">Total: ${cartTotal.toFixed(2)}</div>
    </div>
  );
};

export default Sidebar;
