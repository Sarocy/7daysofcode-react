# 7 Days of Code: React 💻💸

## 💻 Dia 02: Componentizando a Interface

### 🚀 O Desafio de Hoje

No segundo dia do nosso desafio, criamos componentes fundamentais da nossa aplicação de controle financeiro, aprendendo conceitos como componentização, props no React, estilização com styled-components, responsividade e utilização de ícones com react-icons.

**1. Criamos o componente `Header`**, que exibe uma mensagem de boas-vindas e a nossa imagem de fundo do cabeçalho, mostrando que a gente sabe usar `styled-components`!

**2. Criamos o componente `Resume`**, que mostra se estamos mandando bem ou se precisamos segurar nos gastos, pois ele:

- Exibe `Entradas, Saídas e Total`.
- Utiliza os ícones do `react-icons` para facilitar a identificação.
- Dentro dele, chama outro componente que criamos: o `ResumeItem`.

**3. Criamos o componente `ResumeItem`**, em que cada card (`Entradas, Saídas e Total`) é um `ResumeItem`, é dinâmico e recebe **props** para os seguintes dados:
  - `title` -> O título do card (Entradas, Saídas, Total).
  - `Icon` -> O ícone que representa aquele card.
  - `value` -> O valor em grana que aparece no card.

**4. Aplicamos estilização com Styled-components**, de forma que cada componente recebeu seu próprio arquivo de estilo usando `styled-components`, estilos `responsivos`, que se ajustam a diferentes tamanhos de tela!

**5. Renderizamos tudo no App.jsx **, importando e exibindo os componentes `Header` e `Resume` na tela, além de criarmos um **estilo global** para garantir que tudo fique alinhado com o design do Figma.

