# 7 Days of Code: React 💻💸

## 💻 Dia 03: Formulário e Captura de Dados

### 🚀 O Desafio de Hoje

No terceiro dia do nosso desafio, criamos um componente de formulário funcional para capturar as movimentações financeiras do usuário. Aprendemos sobre manipulação de eventos, estados controlados e boas práticas para coleta de dados no React!

### 1. Criamos o Componente **Form**

Esse componente tem a responsabilidade de receber as informações de cada movimentação financeira, como:

- **Data** da transação.
- **Categoria** ou descrição da movimentação.
- **Valor** da transação.
- Definir se é **Entrada** ou **Saída**.


### 2. Estados e Funções

Utilizamos o **useState** para armazenar os dados digitados nos campos:

- **desc** -> Descrição.
- **amount** -> Valor.
- **date** -> Data.
- **isExpense** -> Identificar se é Saída ou Entrada.

Criamos também a função **handleSave** que:

- Valida se todos os campos foram preenchidos corretamente.
- Gera um objeto de transação com um ID único.
- Chama a função **handleAdd** (passada por props) para adicionar a transação na lista.
- Limpa os campos após a inserção.

### 3. Estilizamos o Formulário com **styled-components**

Cada parte do formulário foi cuidadosamente estilizada:

- Inputs arredondados.
- Botão de adicionar estilizado.
- Grupo de botões do tipo **radio** para diferenciar **Entrada** e **Saída**.
- Layout responsivo, adaptado para dispositivos móveis.

### 4. Renderizamos no App.jsx

Integramos o **Form** no **App.jsx**:

- Passamos a função **handleAdd** como props.
- Garantimos que o componente está devidamente posicionado na interface.

### 5. Tecnologias Utilizadas:

- **React** -> Construindo nossa interface reativa.
- **styled-components** -> Personalizando nossos componentes com estilo.
- **useState** -> Manipulando estados dinâmicos em formulários.


