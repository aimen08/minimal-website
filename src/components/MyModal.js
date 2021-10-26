import React from "react";
import { Modal } from "react-rainbow-components";

export default function MyModal({ img, isOpen, setIsOpen }) {
  return (
    <div>
      <Modal
        id="modal-1"
        isOpen={isOpen}
        style={{ height: 500, width: 850 }}
        onRequestClose={setIsOpen}
      >
        <img src={img} className="max-w-3l mx-auto object-contain" alt="app" />
      </Modal>
    </div>
  );
}
