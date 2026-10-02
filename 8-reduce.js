import { documents } from "./data.js";

// O método reduce é o primeiro que usa uma função de callback com uma assinatura diferente.
// Um exemplo ajudará a entender essas diferenças.

// Exemplo 1. Vamos obter a soma dos elementos em um array de números usando reduce.
// Podemos "reduzir" o array a um único valor.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
// console.log(sum);

// A função de callback recebe dois argumentos: o acumulador e o valor atual.
// Na primeira iteração, o acumulador começa com o valor do primeiro elemento do array;
// na segunda iteração, ele recebe o valor retornado pelo callback da iteração anterior;
// e assim por diante.

// Execute a função logWithDetails para ver o que acontece em cada iteração.
function logWithDetails() {
  const sum = numbers.reduce(function (accumulator, currentValue) {
    console.log("Início da iteração");
    console.log("acumulador é", acumulador);
    console.log("valor atual é", currentValue);
    console.log("Fim da iteração\n");
    return accumulator + currentValue;
  });
  console.log("A soma é", sum);
}
// logWithDetails()

// Exemplo 2. Por padrão, o acumulador começa com o primeiro elemento do array.
// Mas podemos mudar isso passando um segundo argumento ao reduce.
// Aqui está um exemplo simples para mostrar como funciona.
const letters = ["A", "B", "C"];
const lyrics = letters.reduce(function (acc, curr) {
  return acc + curr;
}, "Agora eu sei meu  "); // O acumulador inicia como "Agora eu sei meu "
// console.log(lyrics + "'s, da próxima vez você não vai cantar comigo?")

// Exemplo 3. Podemos acessar o índice do elemento atual.
// Se nenhum valor inicial for especificado, o índice começa em 1 na primeira iteração.
function withNoInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Início da iteração");
    console.log("acumulador é", acc);
    console.log("o valor atual é", curr);
    console.log("o índice do valor atual é", i);
    console.log("Fim da iteração\n");
    return acc + curr;
  });
  console.log("A soma é", sum);
}
// withNoInitialValue();

// Mas se passarmos um valor inicial, o índice começa em 0 na primeira iteração.
function withInitialValue() {
  const sum = numbers.reduce(function (acc, curr, i) {
    console.log("Início da iteração");
    console.log("acumulador é", acc);
    console.log("o valor atual é", curr);
    console.log("o índice do valor atual é", i);
    console.log("Fim da iteração\n");
    return acc + curr;
  }, 100); // valor inicial definido como 100
  console.log("A soma é", sum);
}
// withInitialValue();

// Exemplo 4. Podemos contar arquivos por tipo.
// O resultado é um objeto onde as chaves são os tipos e os valores são as contagens.
function countFilesByType(documents) {
  const counts = documents.reduce(function (acc, curr) {
    const type = curr.type;
    if (acc[type]) {
      // se o tipo já existe, incrementa a contagem
      acc[type] = acc[type] + 1;
    } else {
      // senão, inicia a contagem em 1
      acc[type] = 1;
    }
    return acc;
  }, {}); // valor inicial é um objeto vazio para armazenar as contagens
  return counts;
}
// console.log(countFilesByType(documents));

// Exemplo 4. Vamos imprimir uma saída interessante para o usuário: uma tabela em markdown
// com duas colunas listando os nomes e tamanhos dos documentos. No topo da tabela
// deve haver uma linha de cabeçalho. A saída esperada será parecida com esta:
//
// | Nome      | Tamanho |
// | --------- | ------- |
// | Graph.png |   1100  |
// | audio.mp3 |   3000  |
//
// O espaço em branco não importa, pois o renderizador markdown vai ajustar isso automaticamente.
function printTable(documents) {
  const head = "| Nome   | Tamanho |\n" + "| ---- | ---- |\n";
  const table = documents.reduce(function (acc, curr) {
    return acc + `| ${curr.name} | ${curr.size} |\n`; // adiciona uma linha à tabela
  }, head); // o valor inicial são as duas primeiras linhas da tabela
  return table;
}
console.log(printTable(documents));
