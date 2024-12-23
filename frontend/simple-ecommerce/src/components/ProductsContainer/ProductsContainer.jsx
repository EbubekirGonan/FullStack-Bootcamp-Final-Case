import ProductCard from "../ProductCard/ProductCard"
import './ProductsContainer.css'

function ProductsContainer({filteredProducts, handleAddToBasket, handleRemoveFromBasket}) {
  return (
    <>
    <div id="products-container">

      {filteredProducts.map((product) => (
        <ProductCard 
        key={product._id}
        product={product}
        handleAddToBasket = {handleAddToBasket}
        handleRemoveFromBasket = {handleRemoveFromBasket}
        />

      ))}

    </div>
    
    </>
  )
}

export default ProductsContainer