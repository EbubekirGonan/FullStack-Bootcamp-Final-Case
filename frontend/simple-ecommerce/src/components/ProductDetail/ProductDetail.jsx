import { useParams } from "react-router-dom";

import './ProductDetail.css'

function ProductDetail({ products }) {
  console.log("products in detail:", products)
  const { id } = useParams();
  const product = products.find((p) => p._id == id);

  if (!product) return <div>Ürün bulunamadı.</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetail;
