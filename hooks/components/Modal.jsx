import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        Esse é um modal
        <br />
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  return null;
};

export default Modal;
