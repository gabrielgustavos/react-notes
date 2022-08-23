import React from "react";

const Evento = () => {
  const handleClick = () => alert("Clicou no botão");
  const handleScroll = (e) => console.log(e);

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <h1>Evento no JSX</h1>
      <button onClick={() => alert("Clicou")}>Clique aqui</button>
      <button onClick={handleClick}>Clica aqui de novo</button>

      <h1>Window/document no JSX</h1>
    </>
  );
};

export default Evento;
