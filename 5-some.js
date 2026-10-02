import { documents, validatedDocuments } from "./data.js";

// O método some recebe uma função de callback que é executada para cada elemento.
// Essa função deve retornar um valor booleano. Se ela retornar true para
// qualquer elemento, o método some retorna true. Caso contrário, retorna false.

// Exemplo 1. Espaços não são permitidos em caminhos de arquivo em vários contextos.
// Se algum dos documentos tiver um espaço no nome, uma mensagem de aviso
// deve ser exibida.

function containsSpaces(documents) {
  return documents.some(function (document) {
    return document.name.includes(" ");
  });
}
// if (containsSpaces(documents)) {
//   console.log("Um ou mais nomes de arquivo inválidos");
// }
// if (containsSpaces(validatedDocuments)) {
//   console.log("Um ou mais nomes de arquivo inválidos"); // Não deve imprimir nada
// }

// Exemplo 2. Precisamos exibir uma mensagem ao usuário se um ou mais arquivos forem muito grandes.
function isFileTooLarge(documents) {
  return documents.some(function (document) {
    return document.size > 30000000;
  });
}
// if (isFileTooLarge(documents)) {
//   console.log("Um ou mais arquivos têm mais de 30 MB");
// }
// if (isFileTooLarge(validatedDocuments)) {
//   console.log("Um ou mais arquivos têm mais de 30 MB"); // Não deve imprimir nada
// }
