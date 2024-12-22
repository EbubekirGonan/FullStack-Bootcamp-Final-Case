import React from "react";
import api from "../../api/api";
import "./Basket.css";

const Basket = ({ basket, setBasket }) => {
  // Ürünleri gruplayarak adet hesapla
//   console.log("in basket: ", basket)
  const groupedBasket = basket.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item._id === product._id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

//   const totalQuantity = groupedBasket.reduce((sum, product) => sum + product.quantity, 0);
  // Toplam adet ve toplam fiyat hesapla
  const totalPrice = groupedBasket.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  const handleIncrease = (productId) => {
    const updatedBasket = [...basket, basket.find((product) => product._id === productId)];
    // console.log(" Basket:", groupedBasket);
    setBasket(updatedBasket);
  };

  const handleDecrease = (productId) => {
    const productIndex = basket.findIndex((product) => product._id === productId);
    if (productIndex !== -1) {
      const updatedBasket = [...basket];
      updatedBasket.splice(productIndex, 1);
      setBasket(updatedBasket);
    }
  };

  const handlePayment = async () => {
    try {
      const body = {
        products: groupedBasket.map((product) => ({
          productId: product._id, 
          quantity: product.quantity,
        })),
      };
      console.log("Payment body:", body.products);
      const res = await api.post("/payment", body);
      setBasket([]);
      alert('Ödeme başarılı!');
      console.log(res.data);
    } catch (error) {
      console.error("Ödeme yapılırken hata oluştu:", error);
    }
  }

  return (
    <div className="basket-container">
            <table className="basket-table">
                <thead>
                    <tr>
                        <th>Ürün Görseli</th>
                        <th>Ürün İsmi</th>
                        <th>Adet</th>
                        <th>Fiyat</th>
                    </tr>
                </thead>
                <tbody>
                    {groupedBasket.map((product, index) => (
                        <tr key={index}>
                            <td>
                                <img
                                src={product.image}
                                alt={product.title}
                                className="basket-product-image"
                                />
                            </td>
                            <td>{product.title}</td>
                            <td>
                                <button 
                                className="decrease-button" 
                                onClick={() => handleDecrease(product._id)}
                                >-</button>
                                {product.quantity}
                                <button 
                                className="increase-button"
                                onClick={() => handleIncrease(product._id)}
                                >+</button>
                            </td>
                            <td>{(product.price * product.quantity).toFixed(2)} TL</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2" className="total-label">
                            <strong>Toplam:</strong>
                        </td>
                        <td>
                            <strong>{basket.length} adet</strong>
                        </td>
                        <td>
                            <strong>{totalPrice.toFixed(2)} TL</strong>
                        </td>
                    </tr>
                </tfoot>
            </table>


        <div className="order-summary">
            <h3>Sipariş Özeti</h3>
            <p><strong>Toplam Tutar:</strong> {totalPrice} TL</p>
            <p><strong>Ödenecek Tutar:</strong> {totalPrice} TL</p>
            <button className="checkout-btn" onClick={handlePayment}>Ödeme Yap</button>
        </div>
    </div>
  );
};

export default Basket;
