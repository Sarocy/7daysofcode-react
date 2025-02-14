# 7 Days of Code: React 💻💸

## 💻 Dia 02: Componentizando a Interface

### 🚀 O Desafio de Hoje

No segundo dia do nosso desafio, botamos a mão na massa para criar componentes fundamentais da nossa aplicação de controle financeiro, aprendendo conceitos como componentização, props no React, estilização com styled-components, responsividade e utilização de ícones com react-icons.

### 1. Criamos o Componente **Header** 

O **Header** ficou responsável por dar aquele oi caloroso e estiloso no topo da nossa aplicação, exibindo uma mensagem de boas-vindas e a nossa imagem de fundo do cabeçalho, mostrando que a gente sabe usar **styled-components**!

### 2. Criamos o Componente **Resume** 

O **Resume** é aquele componente que mostra se estamos mandando bem ou se precisamos segurar nos gastos, ele:

- Exibe **Entradas, Saídas e Total**.
- Utiliza os **ícones do react-icons** para dar aquele charme e facilitar a identificação.
- Dentro dele, chama outro componente que criamos: o **ResumeItem**.

### 3. Criamos o componente **ResumeItem** 

Aqui entramos de vez no mundo da componentização:

- Cada card (Entradas, Saídas e Total) é um **ResumeItem**.
- Ele é dinâmico! Recebe **props** para os seguintes dados:
  - **title** -> O título do card (Entradas, Saídas, Total).
  - **Icon** -> O ícone que representa aquele card.
  - **value** -> O valor em grana que aparece no card.

### 4. Aplicamos estilização com Styled-components 
 Cada componente recebeu seu próprio arquivo de estilo usando **styled-components**, estilos **responsivos**, se ajustando a diferentes tamanhos de tela!

### 5. Renderizamos tudo no App.jsx 
   Juntamos tudo em **App.jsx**:

- Importamos e exibimos os componentes **Header** e **Resume** na tela.
- Criamos um **estilo global** para garantir que tudo fique alinhado com o design do Figma.

### 6. Estrutura Final do Projeto (até agora):

```
src/
├── components/
│   ├── Header/
│   │   ├── index.jsx
│   │   └── styles.js
│   ├── Resume/
│   │   ├── index.jsx
│   │   └── styles.js
│   └── ResumeItem/
│       ├── index.jsx
│       └── styles.js
├── App.jsx
└── main.jsx
```

### 7. Tecnologias Utilizadas:
- **React** -> Nossa biblioteca amada!
- **styled-components** -> Estilizando com elegância.
- **react-icons** -> Deixando tudo mais visual.

