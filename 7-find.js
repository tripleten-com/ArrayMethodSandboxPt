import { documents } from "./data.js";

// O método find permite recuperar um item específico de um array.
// Ele retorna o primeiro elemento que passar no teste implementado pela função de callback.

// Exemplo 1. Precisamos de uma função que recupere um arquivo pelo seu nome.
function findFileByName(files, name) {
  return files.find((file) => {
    return file.name === name;
  });
}
// console.log(findFileByName(documents, "document.txt"));

// Exemplo 2. Agora, precisamos encontrar um arquivo pelo seu ID.
function findFileById(files, ID) {
  return files.find((file) => {
    return file._id == ID;
  });
}
// console.log(findFileById(documents, "507f1f77bcf86cd799439010"));

// Exemplo 3. Se nenhum item correspondente for encontrado, o método find retornará undefined.
// Em vez de lançar um erro, queremos que nossa função retorne um objeto com uma mensagem.
function improvedFindFileById(files, ID) {
  const file = files.find((file) => {
    return file._id == ID;
  });

  // Se o arquivo for undefined, retornamos o objeto de mensagem.
  return file || { message: "Arquivo não encontrado" };
}
// console.log(improvedFindFileById(documents, "507f1f77bcf86cd799439010"));
// console.log(improvedFindFileById(documents, "non-existent-id"));
