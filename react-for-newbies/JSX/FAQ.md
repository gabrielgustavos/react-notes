## O que significa JSX?

- JavaScript XML / Extension.

## Como funciona?

- Estende a sintaxe do JS, introduzindo elementos XML que são convertidos em funções de React.

## Como utilizar?

- É possível utilizar através das seguintes extensões "tsx, ou jsx"
  - (jsx) => JS Vanilla
  - (tsx) => TypeScript

## Regras do JSX:

- É obrigatório haver um elemento pai envolvendo mais de um elemento HTML!
  - exemplo:
  <>
   <h1></h1>
   <h2></h2>
  </>
- camelCase!
- Funções não podem ser passadas como elementos filhos, é preciso chama-las!

## Atributos

- Atributos podem ser passados da mesma forma como no HTML, porém em alguns casos é necessário uma mudança de sintaxe.
  - exemplo => className

## Expressões / Variaveis no JSX.

- Expressões e variáveis podem ser colocadas dentro do JSX com chaves {}
- Booleans, undefined e null não irão ter efeito na tela.
- Objects irão retornar um erro
- Number, string e array irá ter efeito na tela

## Style

- Style pode receber um objeto com as properidades de um elemento em camelCase
- Exemplo => fontSize, fontFamily
- Não é recomendado utilizar CSS de forma interna, pois há grandes chances de deixar a estrutura poluida, dificultando a legibilidade e futuras manutenções

## JSX w/ Arrays

- O JSX necessita de uma key única para cada elemento no array!
- É comum a utilização do map direto no array para retornos baseados nos items dentro do array
- Também é comum fazermos o uso de array de objetos, ao invés de arrays puros

## Eventos

- É possível atribuir eventos diretamente aos elementos JSX como um atributo
- Os eventos são criados pelo próprio React, porém de acordo com as especificações da W3C
- É possivel realizar a execução de funções anonimas para execução de tarefas únicas
- Eventos no window/document ou quaisquer elementos externos ao react, devem ser adicionados com javascript PURO, fazendo uso do addEventListener
