import { BsXLg, BsDashCircle, BsPlusCircle } from "react-icons/bs";
import Images from "../images/index";

const Sidebar = (props) => {
  const { display, products, setProducts, toggleDisplay } = props;
  const result = products.filter((product) => product.cart === true);
  const total = 0;
  console.log(result);

  const handleChange = (index, e) => {
    console.log(`index {index} has been received`);
    console.log(e.target.id);
    console.log(e.target.action);
  };

  return (
    <div className={`sidebar-container${display ? "-active" : ""}`}>
      <div className="sidebar-top">
        Cart{" "}
        <button onClick={toggleDisplay}>
          <BsXLg />
        </button>
      </div>
      <div className="sidebar-contents">
        {result.length === 0 ? "Cart is empty" : ""}
        {result.map((item, index) => (
          <div className="sidebar-item" key={index}>
            <img src={Images[item.image]} alt={item.name}></img>
            <span>{item.name}</span>
            <br></br>
            <BsDashCircle onClick={(e) => console.log(e, index)}/>
            <input
              type="text"
              id={item.id}
              action="custom value"
              value={item.quantity}
              onChange={(e) => handleChange(index, e)}
            ></input>
            <BsPlusCircle />
            <span className="sidebar-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="sidebar-bottom">Total: ${total.toFixed(2)}</div>
    </div>
  );
};

export default Sidebar;
