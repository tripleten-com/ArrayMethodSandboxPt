import { documents } from "./data.js";

// O método map é semelhante ao forEach: ele também recebe uma função de callback que é
// chamada para cada elemento do array. Essa função recebe os mesmos
// argumentos que o forEach recebe.

// Mas há uma diferença muito importante: o método map retorna um novo
// array. Esse novo array contém os valores de retorno produzidos pela função
// aplicada a cada elemento.

// Exemplo 1. Obtendo um array com os nomes de todos os documentos.
const docNames = documents.map(function (document) {
  return document.name;
});
// console.log(docNames);

// Exemplo 2. Antes de exibir os dados no frontend, precisamos formatar o campo
// dateModified no formato MM/DD/AAAA.
const docsWithLocalDates = documents.map(function (document) {
  const newDate = new Date(document.dateModified).toLocaleDateString();
  document.dateModified = newDate;
  return document;
});
// console.log(docsWithLocalDates);

// Exemplo 3. Estamos processando uploads de arquivos e há um limite de tamanho de 30 MB.
// Se um arquivo ultrapassar esse limite, precisamos exibir uma mensagem de erro para o usuário.
// Caso contrário, mostramos "Arquivo carregado com sucesso".
const fileUploadMessages = documents.map(function (document) {
  if (document.size > 30000000) {
    return "O arquivo deve ter menos de 30 MB";
  } else {
    return "Arquivo carregado com sucesso";
  }
});
// console.log(fileUploadMessages)
