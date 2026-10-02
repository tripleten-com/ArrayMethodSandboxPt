import { documents } from "./data.js";

// O método filter funciona de forma semelhante ao forEach e ao map: ele também recebe
// uma função de callback e cria um novo array.
//
// Mas no caso do filter, a função de callback deve retornar um valor booleano.
// Se retornar true, o elemento é incluído no novo array.
// Caso contrário, ele é excluído.

// Exemplo 1. Obtendo um array contendo apenas os arquivos de imagem.
function isImageFile(document) {
  return document.type.startsWith("image/");
}
const imageDocuments = documents.filter(isImageFile);
// console.log(imageDocuments);

// Exemplo 2. Temos um recurso de exclusão de arquivos. O usuário seleciona um arquivo para excluir,
// uma solicitação é enviada ao nosso backend, e o arquivo é removido do banco de dados.
// Precisamos filtrar o arquivo que acabou de ser excluído, usando seu ID para identificá-lo.
function handleFileDeletion(docId, documents) {
  const newDocs = documents.filter(function (document) {
    return document._id !== docId; // mantém todos os documentos, exceto o que foi excluído
  });
  return newDocs;
}
const newDocs = handleFileDeletion("507f1f77bcf86cd799439011", documents);
// console.log(newDocs);

// Exemplo 3. Frequentemente, os métodos de array são encadeados.
// Por exemplo, imagine que precisamos filtrar todos os arquivos de imagem
// e também converter o campo dateModified para o formato local.
const imageDocumentsWithLocalDates = documents
  .filter(isImageFile)
  .map(function (document) {
    const newDate = new Date(document.dateModified).toLocaleDateString();
    document.dateModified = newDate;
    return document;
  });
console.log(imageDocumentsWithLocalDates);
