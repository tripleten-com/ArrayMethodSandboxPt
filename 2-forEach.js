// Em loops.js usamos um loop for para imprimir os nomes de cada pessoa na
// matriz de pessoas.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function withForLoop() {
  for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
  }
}
// withForLoop();

// Aqui está o loop equivalente usando o método forEach. Observe que não precisamos
// nos preocupar com a variável de índice ou com o comprimento do array.
function withForEach() {
  people.forEach((person) => {
    console.log(person.name);
  });
}
// withForEach();

// Mas, se necessário, podemos acessar a variável de índice como segundo argumento da
// função de callback.
function forEachWithIndex() {
  people.forEach((person, i) => {
    console.log(`indice: ${i}, nome: ${person.name}`);
  });
}
// forEachWithIndex();

// Passar funções de callback anônimas para métodos de array é comum, mas muitas vezes
// é preferível usar funções nomeadas. Observe que a função logDetailedInfo aceita
// os mesmos argumentos que os callbacks anônimos que usamos acima.
function logDetailedInfo(personData, i) {
  console.log(`${i + 1}. ${personData.name} tem ${personData.age} anos de idade.`);
}

// Podemos usar essa função com o método forEach assim. Repare que estamos
// apenas passando o nome da função logDetailedInfo, sem chamá-la.
function forEachWithNamedCallback() {
  people.forEach(logDetailedInfo);
}
// forEachWithNamedCallback();
