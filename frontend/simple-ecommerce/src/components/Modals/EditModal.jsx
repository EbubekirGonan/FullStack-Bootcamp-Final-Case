import { useState } from "react"
import './Modal.css'

function EditModal({ selectedProduct, setProducts, onClose}) {

  const [title, setTitle] = useState(selectedProduct.title)
  const [description, setDescription] = useState(selectedProduct.description)
  const [price, setPrice] = useState(selectedProduct.price)

  const handleSave = () => {
    console.log("kaydet butonuna tıklandı")
    console.log(selectedProduct)
    const updatedProduct = {
      ...selectedProduct,
      title,
      description,
      price,
    }
    console.log(updatedProduct)

    setProducts((prevProducts) => {
      return prevProducts.map(product =>
        product.id === selectedProduct.id ? updatedProduct : product
      );
    });
    onClose();
  }

  return (
    <div id="edit-modal" className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2>Ürünü Düzenle</h2>
                <form id="edit-form">
                    <label htmlFor="edit-title">Başlık:</label>
                    <input
                        type="text"
                        id="edit-title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label htmlFor="edit-description">Açıklama:</label>
                    <textarea
                        id="edit-description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label htmlFor="edit-price">Fiyat:</label>
                    <input
                        type="number"
                        id="edit-price"
                        name="price"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <button type="button" className="save-button" onClick={handleSave}>Kaydet</button>
                </form>
            </div>
        </div>
  )
}

export default EditModal