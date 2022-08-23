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
      livros: ["Clean Code", "The Art of Computer Programming"],
    },
  },
};

console.log(cliente.compras.digitais.livros); // ["The lord of the rings", "Harry Potter"]
console.log(cliente.compras.digitais.filmes); // ["Star Wars", "The Batman"]

let a, b, rest;
[a, b] = [1, 2];
console.log(a, b);

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

// Array destructuring

let foo = ["one", "two", "three"];

let [first, second, third] = foo;

console.log(first); // "one"
console.log(second); // "two"
console.log(third); // "three"
