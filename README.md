# Sandbox do método TripleTen Array

Este repl reúne uma coleção de exemplos de uso dos métodos de array do JavaScript. A maioria dos arquivos JS corresponde a um método específico. A única exceção é o `1-loops.js`, que traz um resumo do uso de loops `for` para iterar sobre um array.

Não entraremos em detalhes sobre a sintaxe, pois partimos do princípio de que você já está familiarizado com ela.

## **Executando os exemplos**

Você pode executar os arquivos JavaScript no terminal com o comando `node filename.js`. Para abrir o terminal, use o atalho **Ctrl+`**, ou vá em **Barra lateral esquerda > Todas as ferramentas > Shells**.

Como cada arquivo contém vários exemplos, encapsulamos cada um deles em uma função. Para ver a saída, basta chamar a função e rodar o comando `node filename.js` no terminal.

## **Os dados**

Muitos dos exemplos usam dados do arquivo `data.js`: uma matriz de objetos que armazenam metadados de documentos.

Esses dados são importados nos arquivos da seguinte forma:

```js
import { documents } from "./data.js"
```

Isso basicamente cria uma variável chamada `documents` naquele arquivo, que contém o array exportado de `data.js`.