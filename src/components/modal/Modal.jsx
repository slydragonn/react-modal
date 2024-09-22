import { useState } from "react";
import "./Modal.css";

export default function Modal({ children, title }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button className="modal-open" onClick={openModal}>
        Open Modal
      </button>
      {isModalOpen ? (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{title}</h2>
            {children}
            <button className="modal-close" onClick={closeModal}>
              Close Modal
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
