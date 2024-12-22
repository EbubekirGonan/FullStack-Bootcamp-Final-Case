import './Modal.css'

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="modal" id="delete-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onCancel}>&times;</span>
        <h2>Ürünü Silmek İstediğinize Emin Misiniz?</h2>
        <p>Bu işlem geri alınamaz!</p>
        <div className="modal-buttons">
          <button className="cancel-button" onClick={onCancel}>Vazgeç</button>
          <button className="confirm-button" onClick={onConfirm}>Sil</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
