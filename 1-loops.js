// Muitas vezes, na programação, temos um trecho de código que queremos executar
// uma vez para cada item em uma coleção. Por exemplo, podemos querer
// imprimir o nome de cada pessoa em uma lista de pessoas.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// Poderíamos fazer isso sem um loop, dessa forma:
function withoutForLoop() {
  console.log(people[0].name);
  console.log(people[1].name);
  console.log(people[2].name);
}
// withoutForLoop();

// Mas e se houvesse 100 pessoas na lista? E mais:
// e se o conteúdo da lista mudasse?
// Para lidar com isso, podemos usar um loop.
function withForLoop() {
  for (let i = 0; i < people.length; i++) {
    // Usamos a variável i para acessar cada item no array.
    console.log(people[i].name);
  }
}
// withForLoop();

// Por fim, vamos analisar em detalhes o que acontece em cada etapa. Descomente a
// chamada da função, execute este arquivo no terminal com `node loops.js` e
// observe a saída.
function withDetailedOutput() {
  for (let i = 0; i < people.length; i++) {
    console.log("i is", i);
    console.log("is i < people.length?", i < people.length);
    console.log("o corpo do loop é executado");
    console.log(people[i].name);
    console.log("a expressão de incremento é executada");
    console.log("fim da iteração\n");
  }
}
// withDetailedOutput();
