
# TESTE TRANSFEERA 🚀

Este repositório contém um aplicativo React criado com o `create-react-app`. Abaixo estão instruções detalhadas sobre como configurar e executar o projeto.

[Figma](https://www.figma.com/proto/8zSuDeDe8yI9zxP2mVKZnp/Teste-%7C-Dev?page-id=0%3A1&node-id=0-86&viewport=560%2C387%2C0.21&scaling=min-zoom&starting-point-node-id=0%3A86&t=RoxfOIyyIU4G1Duv-1)

O objetivo é transformar esse design em um sistema funcional na web, integrando-o com a biblioteca [JSON Server](https://github.com/typicode/json-server) junto com o JSON fornecido, para simular um back-end para a aplicação. O sistema inclui funcionalidades de listagem com filtros, inclusão, edição e remoção de recebedores de pagamento.

<img src="https://github.com/gatoledo1/transfeera-test/assets/19327889/2de0549f-fde0-402e-b2cb-fae8b6209aa8" width="390" height="240">
<img src="https://github.com/gatoledo1/transfeera-test/assets/19327889/521924f1-f922-4b72-9856-cbdc58df5919" width="390" height="240"> 

## ✅ Pré-requisitos

Certifique-se de que você tenha o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados no seu sistema.

## 🎉 Instalação

1. Clone este repositório no seu ambiente local:

   ```bash
   git clone https://github.com/gatoledo1/transfeera-test.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd transfeera-test
   ```

3. Instale as dependências do projeto executando:

   ```bash
   npm install
   ```

## Executando o Aplicativo

1. Para iniciar o servidor de desenvolvimento e executar o aplicativo, utilize o seguinte comando em uma aba do terminal:

   ```bash
   npm run server
   ```

2. Em outra aba do terminal execute o app:

   ```bash
   npm start
   ```
Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão. 
   
OBS: A aplicação não quebrará se o server for iniciado depois, mas para obter os dados, a página deverá ser recarregada.

## Testando com Cypress

Este projeto utiliza o Cypress para testes de front-end. Siga as etapas abaixo para rodar os testes:

Certifique-se de que o servidor de desenvolvimento esteja em execução (etapa anterior).

1. Abra uma nova janela de terminal e execute o seguinte comando para iniciar o Cypress:

   ```bash
   npm run cypress
   ```

O Cypress abrirá uma interface de usuário. 

2. Na janela do Cypress, entre em E2E Testing e depois escolha seu navegador de preferência.

3. Clique nos testes que deseja executar.

![Captura de tela de 2023-11-07 13-13-58](https://github.com/gatoledo1/transfeera-test/assets/19327889/614ce89f-200d-4540-96c3-96fee82aa67c)


O Cypress executará os testes e mostrará os resultados na interface do usuário.





