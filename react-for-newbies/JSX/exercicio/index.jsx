// Mostre os dados da aplicação
// Não utilize CSS externo, use o style inline para mudança de cores
// Se a situação estiver ativa, pinte de verde, caso contrário, vermelho
// Se o gasto for maior que 1000 mostre uma mensagem de alerta

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const greenStyle = {
  color: "green",
};

const redStyle = {
  color: "red",
};

const Exercise = () => {
  const dados = luana;
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);
  console.log(total);
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        {" "}
        Situação:
        <span style={dados.ativa ? greenStyle : redStyle}>
          {dados.ativa ? " Ativa" : " Inativo"}
        </span>
      </p>
      <p>Total gasto: {total}</p>
      <p>{total > 10000 && "Você já gastou demais!"}</p>
    </>
  );
};

export default Exercise;
