const titulo = <h1>Texto armazenado em uma variável fora do escopo do App</h1>;

function App() {
  const name = "Gabs";
  const ativo = true;

  function getNome(lastname) {
    return `Jorge ${lastname}`;
  }

  const styleH1 = {
    color: "red",
    fontSize: "2rem",
  };

  return (
    <div className="App">
      <h1 style={styleH1}>Expressões / Variáveis in JSX</h1>
      <p>Olá {name}!</p>
      <p>Está: {ativo ? "Ativo" : "Inativo"}!</p>
      {titulo}
      <p>Nome: {getNome("Gomes")}</p>
    </div>
  );
}

export default App;
