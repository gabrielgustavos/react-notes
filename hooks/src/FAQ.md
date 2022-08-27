## Estado

- O estado de uma aplicação representa suas respectivas caracteristicas naquele momento.
- Por exemplo: dados carregados, botões ativos, usuário está na pagina de contato

## Hooks

- São funções especiais que permitem controles de estado e ciclo de vida de componentes funcionais.

## useState

- O useState é um hook que permite o controle de estado em componentes funcionais.
- O useState retorna um array com duas posições.
- A primeira posição é o valor do estado.
- A segunda posição é uma função que permite alterar o valor do estado.

  => Reatividade - Não é possível alterar o estado de um componente diretamente, é necessário utilizar a função de atualização do estado.

  => Callback - É possível passar um callback para atualizar o estado. - A função recebe um parâmetro representando o valor anterior do estado e irá modifica-lo para o valor que for retornado na função
