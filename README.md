<h1 align="center">Galileo - SEO Assistant</h1>
<p align="center">
  <br>
   <img src="src/img/icon-128.png" alt="Logo Galileo" title="Logo Galileo" />
  <br>
</p>
<p align="center">
  <a href="https://chrome.google.com/webstore/detail/galileo-seo-assistant/jmehfdipeccfhbfbmkfpikgmfpamlalf">
    <img src="https://img.shields.io/chrome-web-store/v/jmehfdipeccfhbfbmkfpikgmfpamlalf.svg">
  </a>
  <a href="https://gitter.im/galileo-seo-assistant/Lobby">
    <img src="https://badges.gitter.im/galileo-seo-assistant.png">
  </a>
</p>  
<p align="center">
  <strong>Galileo SEO Assistant </strong>é uma extensão para o Google Chrome. O <strong>Galileo SEO Assistant </strong> pretende facilitar a tarefa de homologação e testes de SEO de páginas web fornecendo testes automáticos para uma série de requisitos como:
</p>


* `<h1>` das páginas
* `<title>` das páginas
* `<h2>`, `<h3>`, `<h4>`
* rel next e rel prev
* url canônica
* url AMP associada
* rel alternate
* meta description
* outros ...

## Tabela de conteúdos

  * [Download](#download)
  * [Desenvolvendo](#desenvolvendo)
  * [Release notes](#release-notes)
  * [Ideias para o futuro do Galileo SEO Assistant](#ideias-para-o-futuro-do-galileo-seo-assistant)
  * [Licença](#licença)

## Download

Para download da extensão visite a [página do Galileo SEO Assistant na Chrome Webstore](https://chrome.google.com/webstore/detail/galileo-seo-assistant/jmehfdipeccfhbfbmkfpikgmfpamlalf)

## Desenvolvendo

1. Clone esse repositorio
2. Instale [yarn](https://yarnpkg.com): `npm install -g yarn`.
3. Rode `yarn`.
4. Rode `npm run start`
5. Carregue o Galileo no Chrome fazendo:
    1. Acesse `chrome://extensions/`
    2. Cheque `Developer mode`
    3. Clique on `Carregar extensao`
    4. Selecione o diretorio `build`.

## Release notes

0.1.1 (28 de Março de 2018)
* Corrige problema das tabelas mais largas que a área do aplicativo

0.1.0
* Divide aplicativo em 4 abas principais: Resumo, Sucesso, Erros, Alertas
* Aba principal mostra lista de testes que falharam e que foram bem sucedidos
* Exibe um score de 0 a 100 para a página

0.0.5
* Mostra cores verde, amarelo ou vermelho no cabeçalho do aplicativo dependendo do resultado dos testes.
* Adiciona testes para todas as regras de exemplo.
* Adiciona ava para testes unitários.

0.0.2
* Corrigido problema que mostrava links relativos usando chrome-extension no começo;
* Cor principal alterada para azul;
* Adicionada tooltip no título e subtítulo

## Ideias para o futuro do Galileo SEO Assistant

* Internacionalização dos conteúdos de texto;
* Adicionar screenshots na webstore;
* Ter um conjunto de expects inicial para cada conteúdo extraído da página. Exemplo: Para H1 espera-se que não existam dois itens, se existir a aplicação está com erro;
* Alterar cor principal de acordo com o resultado da página: se deu ok, alerta ou erro;
* Ter testes unitários para javascript usando ava;
* Ter relatório de cobertura de testes;
* Parar de usar o bulma do cdn e usar via yarn;
* Permitir que usuários selecionem outros pacotes de regras pre-selecionados;
* Criar uma interface amigável para edição de pacotes de regras: adição de regras, edição de regras, remoção de regras;
* Permitir que usuários exportem/importem seus pacotes de regras em um arquivo de texto;
* Ter um site com lista de arquivos de regras disponíveis para download;
* Permitir que regras por grupos que serão divididos em tabs diferentes, como regras de links e regras de schema.org;
* Permitir que diferentes rotas respondam a diferentes pacotes de regras;
* Permitir que sejam exportados relatórios com os resultados da ferramenta;
* Separar parte do core do GSA para disponibiliza-lo pra criar o Galileo SEO Robot;
* Criar robo capaz de fazer as verificações que o plugin faz mas em lote usando YQL;

## Licença

MIT - Jota Teles - 2017    
