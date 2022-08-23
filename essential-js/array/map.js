const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precosFiltros = precos.filter((preco) => preco.includes("R$"));
const precosNumeros = precosFiltros.map((preco) => preco.replace("R$ ", ""));
console.log(precosNumeros);
