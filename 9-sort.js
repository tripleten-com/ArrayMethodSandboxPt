import { documents } from "./data.js";
// O método sort ordena os elementos de um array.
// Por padrão, ordena os elementos em ordem crescente.
// A função de callback serve para determinar a ordem dos elementos.
// Os exemplos a seguir vão explicar melhor.

// Exemplo 1. Vamos ordenar os documentos pelo tamanho, do menor para o maior.
function sortBySize(documents) {
  return documents.sort((a, b) => {
    // Se a.size for menor que b.size, coloca a antes de b.
    // Se a.size for maior que b.size, coloca b antes de a.
    // Se forem iguais, mantém a ordem.
    return a.size - b.size;
  });
}
// console.log(sortBySize(documents));

// Exemplo 2. Podemos modificar sortBySize para permitir ordem crescente ou decrescente.
function sortBySizeVariableOrder(documents, descending) {
  return documents.sort((a, b) => {
    // Se descending for true, ordena em ordem decrescente.
    if (descending) {
      return b.size - a.size;
    } else {
      return a.size - b.size;
    }
  });
}
// console.log(sortBySizeVariableOrder(documents, true)); // ordem decrescente
// console.log(sortBySizeVariableOrder(documents, false)); // ordem crescente

// Exemplo 3. Agora, vamos ordenar documentos com base em uma propriedade qualquer.
// O parâmetro 'order' padrão é "asc" (ascendente, ou crescente).
// Note que usamos comparações diferentes dependendo do tipo da propriedade.
function sortByProperty(documents, property, order = "asc") {
  let comparison; // aqui vamos armazenar o resultado da comparação
  return documents.sort((a, b) => {
    if (property == "dateModified") {
      // Para comparar datas, convertemos para objetos Date.
      comparison = new Date(a[property]) - new Date(b[property]);
    } else if (typeof a[property] == "string") {
      // Para classificar corretamente strings, podemos usar o método localeCompare,
      // que já trata diferenças de maiúsculas/minúsculas e acentuação.
      comparison = a[property].localeCompare(b[property], "en", {
        sensitivity: "base",
      });
    } else if (typeof a[property] == "number") {
      // Números podem ser comparados diretamente com subtração.
      comparison = a[property] - b[property];
    } else {
      return "Propriedade inválida ou não classificável";
    }
    // Para classificar em ordem decrescente, podemos multiplicar a comparação por -1.
    if (order == "desc") {
      comparison *= -1;
    }

    return comparison;
  });
}
// console.log(sortByProperty(documents, "name"), "desc"); // classificar por nome, em ordem decrescente
// console.log(sortByProperty(documents, "size")); // classificar por tamanho, crescente
// console.log(sortByProperty(documents, "dateModified")); // classificar por data, crescente
// console.log(sortByProperty(documents, "foo")); // propriedade inválida
