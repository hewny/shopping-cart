import Images from "../images/index"

const Products = (props) => {
  const { products, setProducts } = props

  const handleAddToCart = (index) => {
    let newProducts = [...products]
    newProducts[index].cart = true;
    newProducts[index].quantity += 1;
    setProducts(newProducts)
  }

  return (
    <div>
      <div>THIS IS PRODUCTS PAGE</div>
      <div className="ProductPageWrapper">
        {products.map((product, index) => (
          <div key={index}>
            <img src={Images[product.image]} alt={product.name}></img>
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
            <button onClick={() => {handleAddToCart(index)}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;