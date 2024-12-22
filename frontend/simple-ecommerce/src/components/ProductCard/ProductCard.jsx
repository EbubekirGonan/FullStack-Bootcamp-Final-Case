import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './ProductCard.css'

function ProductCard({product, handleAddToBasket, handleRemoveFromBasket}) {

  const [basket, setBasket] = useState({}); 
  const navigate = useNavigate();

  let tempPorductTitle = product.title;
  let tempPorductDescription = product.description;
  const titleLimit = 20;
  const descriptionLimit = 40;

  // console.log(product.image)

  tempPorductTitle = product.title.length > titleLimit ? product.title.slice(0,titleLimit) + '...' : product.title;
  tempPorductDescription = product.description.length > descriptionLimit ? product.description.slice(0, descriptionLimit) + '...' : product.description;
  // console.log(product)

  const addToBasket = (productId) => {
    handleAddToBasket(product._id)
    setBasket((prevBasket) => ({
      ...prevBasket,
      [productId]: (prevBasket[productId] || 0) + 1, // Adedi 1 artır
    }));
  };

  const handleIncrease = (productId) => {
    handleAddToBasket(product._id)
    setBasket((prevBasket) => ({
      ...prevBasket,
      [productId]: prevBasket[productId] + 1,
    }));
  };

  const handleDecrease = (productId) => {
    handleRemoveFromBasket(productId)
    setBasket((prevBasket) => {
      const newBasket = { ...prevBasket };
      if (newBasket[productId] > 1) {
        newBasket[productId] -= 1; // Adedi 1 azalt
      } else {
        delete newBasket[productId]; // Sepetten çıkar
      }
      return newBasket;
    });
  };

  return (
    <>
    
    <div key={product.id} className="product-card">
      <div className='clickable-div' onClick={() => navigate(`/product/${product._id}`)}>
        <img src={product.image} className="product-image"/>
        <span className="product-title">{tempPorductTitle}</span>
      </div>
      <span className="product-description">{tempPorductDescription}</span>
      <span className="product-price"> {product.price} TL</span>
      <div className="basket-controls">
        {basket[product._id] ? (
          <div>
            <button className='decrease-button' onClick={() => handleDecrease(product._id)}>-</button>
            <span>{basket[product._id]}</span>
            <button className='increase-button' onClick={() => handleIncrease(product._id)}>+</button>
          </div>
        ) : (
          <button className="add-to-basket-button" onClick={() => addToBasket(product._id)}>
            Sepete Ekle
          </button>
        )}
      </div>
    </div>
    </>
  )
}

export default ProductCard