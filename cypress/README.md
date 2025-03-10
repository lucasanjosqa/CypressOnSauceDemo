# Sauce Demo Automation Testing

## Descrição
Este projeto tem como objetivo automatizar o teste da aplicação [Sauce Demo](https://www.saucedemo.com/) utilizando Cypress e JavaScript. O foco está em garantir a qualidade da aplicação através da implementação de testes E2E (end-to-end) abrangentes, cobrindo as principais funcionalidades do sistema.

## Funcionalidades Testadas
O seguinte conjunto de cenários foi automatizado:

### 1. Autenticação
#### 1.1. Cenário: Login com Credenciais Válidas
- **Dado que** o usuário esteja na página de login
- **Quando** o usuário inserir um nome de usuário e senha válidos (ex: `standard_user` / `secret_sauce`)
- **Então** o usuário deve ser redirecionado para a página de inventário (`/inventory.html`).

#### 1.2. Cenário: Login com Credenciais Inválidas
- **Dado que** o usuário esteja na página de login
- **Quando** o usuário inserir um nome de usuário ou senha inválidos
- **Então** uma mensagem de erro deve ser exibida (ex: "Username and password do not match").

#### 1.3. Cenário: Login com Usuário Bloqueado
- **Dado que** o usuário esteja na página de login
- **Quando** o usuário inserir as credenciais do `locked_out_user` / `secret_sauce`
- **Então** uma mensagem de erro deve ser exibida (ex: "Sorry, this user has been locked out").

#### 1.4. Cenário: Logout
- **Dado que** o usuário esteja logado na aplicação
- **Quando** o usuário clicar no menu de hambúrguer e selecionar a opção de logout
- **Então** o usuário deve ser redirecionado para a página de login.

### 2. Navegação e Exibição de Produtos
#### 2.1. Cenário: Visualização de Itens da Página de Inventário
- **Dado que** o usuário esteja na página de inventário
- **Então** todos os itens disponíveis devem ser exibidos corretamente (ex: imagens, nomes, descrições, preços).

#### 2.2. Cenário: Ordenação de Produtos
- **Dado que** o usuário esteja na página de inventário
- **Quando** o usuário selecionar a opção de ordenação por "Name (A to Z)" ou "Price (low to high)"
- **Então** os produtos devem ser exibidos na ordem correta.

### 3. Carrinho de Compras
#### 3.1. Cenário: Adicionar Produto ao Carrinho
- **Dado que** o usuário esteja na página de inventário
- **Quando** o usuário adicionar um produto ao carrinho
- **Então** o ícone do carrinho deve ser atualizado para mostrar que o item foi adicionado.

#### 3.2. Cenário: Remover Produto do Carrinho
- **Dado que** o usuário tenha um produto no carrinho
- **Quando** o usuário remover o produto do carrinho
- **Então** o ícone do carrinho deve ser atualizado para mostrar que o item foi removido.

#### 3.3. Cenário: Ver Carrinho de Compras
- **Dado que** o usuário tenha produtos no carrinho
- **Quando** o usuário clicar no ícone do carrinho
- **Então** a lista de produtos e seus preços deve ser exibida corretamente.

### 4. Checkout
#### 4.1. Cenário: Realizar Checkout com Sucesso
- **Dado que** o usuário tenha produtos no carrinho
- **Quando** o usuário preencher as informações necessárias para o checkout (nome e sobrenome, código postal)
- **Então** o usuário deve ser redirecionado para a página de resumo do pedido e ver uma mensagem de confirmação.

#### 4.2. Cenário: Checkout com Informações Inválidas
- **Dado que** o usuário esteja na página de checkout
- **Quando** o usuário inserir informações inválidas (ex: deixar os campos vazios)
- **Então** uma mensagem de erro deve ser exibida.

### 5. Testes de Responsividade
#### 5.1. Cenário: Testar Interface em Dispositivos Móveis
- **Dado que** o usuário acesse o site em um dispositivo móvel
- **Então** o layout deve ser responsivo e todos os elementos devem ser acessíveis.

## Pré-requisitos
Certifique-se de ter [Node.js](https://nodejs.org/) instalado na sua máquina.

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
