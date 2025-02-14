# 7 Days of Code: React 💻💸

## 💻 Dia 07: Implementando Modo Dark/Light

### 🚀 O Desafio de Hoje

No sétimo dia do projeto, demos um upgrade visual e funcional no nosso app: colocamos um botão no Header que permite alternar entre os temas Claro e Escuro (Light e Dark Mode). Agora, o usuário pode escolher se prefere uma tela mais clara ou mais escura enquanto usa o controle financeiro. Essa funcionalidade deixou o app mais moderno e confortável pra usar em diferentes ambientes, tipo de dia ou à noite.

### 1. No componente **App.js**:

- Criamos o estado **isDarkMode** com **useState** pra saber se o tema está no modo claro ou escuro.
- Configuramos o **ThemeProvider** do **styled-components** pra aplicar o tema claro ou escuro de acordo com o valor de **isDarkMode**.
- Passamos **isDarkMode** e a função **toggleTheme** pro componente **Header**, pra que ele pudesse trocar os temas quando o botão fosse clicado.

### 2. No componente **Header.js**:

- Adicionamos um botão de troca de tema.
- Adicionamos os ícones de sol 🌞 e lua 🌙 pra representar o modo claro e escuro, usando a biblioteca **react-icons**.
- O botão muda de aparência conforme o tema escolhido, e o texto do título continua aparecendo logo abaixo.

### 3. No arquivo **styles/global.js**:

- Criamos dois temas: **light** (claro) e **dark** (escuro), cada um com sua cor de fundo.
- Ajustamos o **GlobalStyle** pra que o fundo da página mude automaticamente conforme o tema escolhido.
