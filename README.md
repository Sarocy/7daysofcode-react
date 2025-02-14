# 7 Days of Code: React 💻💸

## 💻 Dia 04: Integração dos Componentes e Implementação da Lógica de Cálculo

### 🚀 O Desafio de Hoje

No quinto dia do desafio, o foco foi aprimorar o controle da lista de transações financeiras, adicionando a funcionalidade de exclusão de registros e melhorando a cálculo dinâmico dos valores de entrada, saída e total. Além disso, foi introduzido o componente Grid para exibir as transações em formato de tabela.


### 1. No geral: 

- Refatoramos a lógica de cálculo de receita (income), despesa (expense) e saldo total (total) diretamente na função principal do componente App.

- Implementamos a função handleDelete para permitir a remoção de transações pela sua id.

- Atualizamos o armazenamento local (localStorage) sempre que uma transação é removida ou adicionada.

- Criamos o componente Grid para exibir as transações e incluir um botão para excluir cada uma delas.

