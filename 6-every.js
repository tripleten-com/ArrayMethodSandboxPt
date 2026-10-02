import { documents, validatedDocuments } from "./data.js";

// O método every é basicamente o oposto do método some. Ele retorna true
// se a função de callback retornar true para **todos** os itens do array.
//
// Ou seja, usamos .some() para verificar se **pelo menos um** item atende a um critério,
// e usamos .every() para verificar se **todos** os itens atendem a esse critério.

// Exemplo 1. Agora precisamos verificar se **todos** os documentos em um lote são válidos,
// onde a validade é determinada pela função isValid.
// Se todos forem válidos, enviamos uma mensagem ao usuário e continuamos o processamento.
function isValid(document) {
  const isNotTooBig = document.size <= 30000000;
  const hasNoSpaces = !document.name.includes(" ");
  return isNotTooBig && hasNoSpaces;
}

function allAreValid(documents) {
  // Verifica se todos os documentos são válidos
  return documents.every(isValid);
}
// if (allAreValid(documents)) {
//   // Não deve imprimir nada
//   console.log("Documentos validados: processando solicitação...");
// }
// if (allAreValid(validatedDocuments)) {
//   console.log("Documentos validados: processando solicitação...");
// }