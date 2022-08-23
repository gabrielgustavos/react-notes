// destructuring objects

const carro = {
  marca: "Ford",
  ano: 2018,
  portas: 4,
};

const { marca, ano } = carro;
console.log(marca); // Ford
console.log(ano); // 2018

const cliente = {
  nome: "Gabriel",
  compras: {
    digitais: {
      livros: ["The lord of the rings", "Harry Potter"],
      filmes: ["Star Wars", "The Batman"],
    },
    fisicas: {
      cds: ["Tears for Fears", "Imagine dragons"],
    },
  },
};

// without destructuring
console.log(cliente.compras.digitais.livros); // ["The lord of the rings", "Harry Potter"]
console.log(cliente.compras.digitais.filmes); // ["Star Wars", "The Batman"]

// with destructuring
const { digitais } = cliente.compras;
const { cds } = cliente.compras.fisicas;
const { livros, filmes } = cliente.compras.digitais;
console.log(livros); // ["The lord of the rings", "Harry Potter"]
console.log(filmes); // ["Star Wars", "The Batman"]
console.log(cds); // ["Tears for Fears", "Imagine dragons"]
console.log(digitais); //  {livros: Array(2), filmes: Array(2)}

// how manipulate the name of the variables

const person = {
  name: "Gabs",
  age: 20,
};

const { name: nome, age: idade } = person;
console.log(nome); // Gabs
console.log(idade); // 20

// destructuring arrays

const frutas = ["banana", "maça", "laranja"];

// without destructuring
const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// with destructuring
const [fruta1, fruta2, fruta3] = frutas;

// using destructuring to create a sequence of variables

// without destructuring
const primeiro = "primeiro";
const segundo = "segundo";
const terceiro = "terceiro";

// with destructuring

const [first, second, third] = ["primeiro", "segundo", "terceiro"];

// destructuring on functions

const soma = (a, b) => a + b;

const [x, y] = [1, 2];

console.log(soma(x, y)); // 3




