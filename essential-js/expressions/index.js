const grupoA = 100;
const grupoB = 300;

// without using ternary operator
if (grupoA > grupoB) {
  console.log("Grupo A venceu!");
} else {
  console.log("Grupo B venceu!");
}

// using ternary operator
const vencedor = grupoA > grupoB ? "Grupo A venceu!" : "Grupo B venceu!";
console.log(`Ternary operator: ${vencedor}`);
