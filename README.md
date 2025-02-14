# 7 Days of Code: React 💻💸

## 💻 Dia 04: Integração dos Componentes e Implementação da Lógica de Cálculo

### 🚀 O Desafio de Hoje
No quarto dia do projeto, trabalhamos na integração dos componentes do sistema e implementamos a lógica para calcular e exibir o saldo total, as entradas e as saídas financeiras, além de adicionarmos a funcionalidade de armazenar os dados das transações no localStorage do navegador. O sistema permite o cadastro de transações (data, descrição, valor e tipo: entrada ou saída), armazenamento de transações no localStorage (exibidas automaticamente após a recarga da página) e o calculo dinamico dos valores de entrada, saída e saldo com base na lista de transações.

### 1. No componente **App.js**: 
- Criamos os estados **transactionsList**, **income**, **expense** e **total** usando **useState**.
- Utilizamos o useEffect para recalcular as entradas, saídas e saldo sempre que a lista de transações for atualizada.
- Implementamos a função handleAdd para adicionar novas transações à lista e salvá-las no localStorage.
- Passamos os valores de income, expense e total para o componente Resume.
- Passamos a função handleAdd como prop para o componente Form.

### 2. No componente **Form.js**
- Definimos os estados desc, amount, date e isExpense.
- Implementamos a função handleSave para validar e criar um objeto de transação, chamando handleAdd do componente pai.
- Corrigimos e removemos repetições de useState e de eventos duplicados.
- Os inputs de data, descrição, valor e botões de tipo (Entrada e Saída) estão integrados com os estados do componente.

### 3. No componente **Resume.js**
- Ajustamos o componente para receber as props income, expense e total.
- Exibimos os valores dinâmicos de entradas, saídas e saldo total, ao invés de valores fixos.
- Corrigimos a declaração duplicada do componente Resume.
