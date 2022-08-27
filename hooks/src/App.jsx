import { useState } from "react";
import ButtonModal from "../components/ButtonModal";
import Modal from "../components/Modal";
import Exercicio from "./exercicio/Exercicio";

function App() {
  const [ativo, setAtivo] = useState(false);

  const [modal, setModal] = useState(false);

  const [contar, setContar] = useState(1);
  const [items, setItems] = useState(["Item 1"]);

  function handleClick() {
    setContar(() => contar + 1);
    setItems([...items, "Item " + (contar + 1)]);
  }

  return (
    <div className="App">
      <h1>Examples of states</h1>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Ativo" : "Inativo"}
      </button>

      <br />
      <br />
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>

      <h1>Exercicio:</h1>

      <Exercicio />
    </div>
  );
}

export default App;
