// without rest

const showList = (company, name) => {
  name.forEach((name) => console.log(`${name} works on: ${company}`));
};

showList("Google", ["Gabs", "João", "Maria"]);

// with rest

const datas = (company, ...clientes) => {
  console.log("USING REST OPERATOR");
  clientes.forEach((name) => console.log(`${name} works on: ${company}`));
};

datas("Google", "Gabs", "João", "Maria");

// spread operator

const numeros = [1, 2, 3, 4, 5];
const spreadNumbers = [20, ...numeros, 6, 7];
console.log(spreadNumbers);

// spread operator with objects

const carro = {
  marca: "Ford",
  ano: 2018,
};

carroAno = { ...carro, ano: 2010 };
console.log(carro);
console.log(carroAno);
