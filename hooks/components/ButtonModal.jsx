import React from "react";

const ButtonModal = ({ setModal }) => {
  return (
    <div>
      <button onClick={() => setModal(true)}>Abrir modal</button>;

      
    </div>
  );
};

export default ButtonModal;
