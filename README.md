# Teste técnico - Raphael Lima

## Como rodar o projeto?

### Local:

1) No repositório baixar o projeto no botão "Code" e depois "Download ZIP".
2) No VsCode pressionar executar o comando "npm i".
3) No terminal executar o comando "npm run dev" e no navegador digitar "http://localhost:3000".

### Deploy:

Link:

## Tecnologias utilizadas:

### Frontend:

<ul>

  <li>ReactJS</li>

  <li>NextJS</li>

  <li>TypeScript</li>

  <li>JavaScript</li>

  <li>API Context</li>

  <li>Tailwind</li>

  <li>Shadcn</li>

  <li>HTML</li>

  <li>Eslint</li>

  <li>Prettier</li>

</ul>

## Sobre o desenvolvimento:

### Organização das branchs:

1) master: Branch para produção
2) develop: Branch de desenvolvimento
3) hotfix: Branch de bugs em produção.

- Padrão de commits: Inicia com um pré-fixo (fix ou feat) seguida de uma mensagem sobre o que foi realizada naquele commit.

### Criação do layout:

Para criar o layout do meu teste técnico me baseie no exemplo do documento do teste e acrescentei elementos e cores que favorecem uma melhor experiência do usuário que facilitam a compreensão do usuário em como a aplicação funciona. Exemplo: Verde se relaciona a vitória e vermelho se relaciona a combate ou derrota.

### Desenvolvimento:

O primeiro passo foi analisar os requisitos do teste técnico, mapear quais funcionalidades minha aplicação iria possuir e quais tecnologias iria utilizar, optei por utilizar NextJS de forma estratégica, para ganhar pontos bônus no processo seletivo e também é a forma mais moderna e eficiente de se desenvolver uma aplicação com ReactJS atualmente, embora tenha saído a versão 14 do NextJS, esse lançamento ocorreu no dia que eu recebi o teste técnico e optei por fazer na 13.5 para depois me atualizar sobre essa nova versão.

O segundo passo foi a configuração do Eslint e Prettier para padronizar do código.

O terceiro passo foi dividir a aplicação em componentes para tornar mais eficiente e organizado o seu desenvolvimento e mais fácil de dar manutenção futuramente, posteriormente analisei a relação entre os componentes e quais os estados que iriam para o contexto global da aplicação.

O quarto passo foi a criação do elemento de exibição dos cards dos heróis, e a separação da aplicação em dois módulos o de exibição e o de combate, para isso criei dois botões em que o usuário pode selecionar o modulo e para tornar mais intuito as bordas dos cards dos heróis mudam de cor de acordo com a escolha do modulo. Para visualizar o perfil do herói basta clicar no botão de visualizar e para adicionar o herói no combate basta o usuário clicar na foto que o nome do personagem será exibido como um dos combatentes. Optei por fazer essa divisão para tornar menos complexo e ser mais intuitivo para o usuário o uso da aplicação. 

O quinto passo foi a criação do perfil do herói, para isso analisei as informações que o API fornece e escolhi as mais relevantes para serem exibidas para o usuário, optei por selecionar os status e a biografia.

O sexto passo foi o desenvolvimento do filtro de busca, escolhi filtrar apenas pelo nome do personagem, o usuário digitando o nome assertivo do usuário ele irá para a página de perfil dele pressionado "Enter" ou clicando no botão de pesquisa, caso o usuário digite o nome errado e mostrado uma mensagem de erro sem apagar o campo de pesquisa para que ele veja o que errou. Como a API não tem um "GET ONE" criei um algoritmo que pelo nome do herói digitado é filtrado o id que é enviado como parâmetro e o id é usado como filtro para selecionar o herói que foi pesquisado.

O sétimo passo foi criação do modulo combate, quando o usuário entra nesse modulo um componente exibi os heróis selecionados, esses podem ser alterados antes do combate, um botão de "Limpar" que limpa os dois campos de heróis que irão combate e um botão de "Iniciar combate", quando o usuário clica nesse botão ele é redirecionado para uma página que aparece o resultado do combate e a comparação dos status dos personagens selecionados 

O último passo foi a criação da paginação no componente de exibição dos cards dos heróis, como a API não foi configurada para fazer a paginação na API com o limit, optei por fazer de forma manual com dois states que controlam o index dentro de um map do array de heróis vindos da API limitando em no máximo 10 os heróis que serão exibidos por vez.

## Ficaria feliz com Feedbacks:

E-mail: raphaeldesousalm@gmail.com <br>

Portfólio: https://raphael-lima-portfolio.netlify.app/

Linkdin: https://www.linkedin.com/in/raphaellima98/
