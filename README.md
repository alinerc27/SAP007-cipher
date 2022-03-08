# Cifra de César

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)

---

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Neste projeto você criará a primeira aplicação web do _bootcamp_. Nela o usuário
poderá cifrar e decifrar um texto indicando a chave de deslocamento (_offset_).

O tema é livre. Você deve pensar em alguma situação de vida real em que seja
necessário cifrar uma mensagem e pensar em como deve ser a experiência do
usuário (tela, explicações, mensagens, cores, marca?, etc.). Algumas ideias de
exemplo:

- Criar senhas seguras para email.
- Cifrar cartões de crédito.
- Ferramenta de mensagens internas de uma organização
  em uma zona de conflito.
- Mensagens secretas para alguma pessoa.

Neste projeto você aprenderá a construir uma aplicação web (_WebApp_) que irá
interagir com o usuário final através do navegador utilizando HTML, CSS e
JavaScript como ferramentas.

## 3. Objetivos de aprendizagem

Reflita e depois enumere os objetivos que quer alcançar e aplique no seu projeto. Pense nisso para decidir sua estratégia de trabalho.

### HTML

- [ ] **Uso de HTML semântico**

    <details><summary>Links</summary><p>

  - [HTML semántico](https://curriculum.laboratoria.la/pt/topics/html/02-html5/02-semantic-html)
  - [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
  </p></details>

### CSS

- [ ] **Uso de seletores de CSS**

    <details><summary>Links</summary><p>

  - [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/01-css/01-intro-css)
  - [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
  </p></details>

- [ ] **Empregar o modelo de caixa (box model): borda, margem, preenchimento**

    <details><summary>Links</summary><p>

  - [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/01-css/02-boxmodel-and-display)
  - [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  - [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  - [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
  </p></details>

### Web APIs

- [ ] **Uso de seletores de DOM**

    <details><summary>Links</summary><p>

  - [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/02-dom/03-1-dom-methods-selection)
  - [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  - [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
  </p></details>

- [ ] **Gerenciamento de eventos de DOM**

    <details><summary>Links</summary><p>

  - [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  - [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  - [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  - [El objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
  </p></details>

- [ ] **Manipulação dinâmica de DOM**

    <details><summary>Links</summary><p>

  - [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  - [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  - [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  - [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  - [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  - [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
  </p></details>

### JavaScript

- [ ] **Tipos de dados primitivos**

    <details><summary>Links</summary><p>

  - [Valores Primitivos - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Data_structures#valores_primitivos)
  </p></details>

- [ ] **Strings (cadenas de caracteres)**

    <details><summary>Links</summary><p>

  - [Strings](https://curriculum.laboratoria.la/pt/topics/javascript/06-strings)
  - [String - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)
  </p></details>

- [ ] **Variáveis (declaração, atribuição, escopo)**

    <details><summary>Links</summary><p>

  - [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/01-values-variables-and-types)
  - [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/01-basics/02-variables)
  </p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário)**

    <details><summary>Links</summary><p>

  - [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/01-conditionals-and-loops)
  - [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
  </p></details>

- [ ] **Uso de laços (for, for..of, while)**

    <details><summary>Links</summary><p>

  - [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/02-loops)
  - [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
  </p></details>

- [ ] **Uso de funções (parâmetros, argumentos, valor de retorno)**

    <details><summary>Links</summary><p>

  - [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/02-flow-control/03-functions)
  - [Funções clásicas](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/01-classic)
  - [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/03-functions/02-arrow)
  - [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
  </p></details>

- [ ] **Testes unitários**

    <details><summary>Links</summary><p>

  - [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
  </p></details>

- [ ] **Uso ES modules**

    <details><summary>Links</summary><p>

  - [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  - [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
  </p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

    <details><summary>Links</summary><p>

  - [Site oficial do GitHub Pages](https://pages.github.com/)
  </p></details>

### UX (User eXperience)

- [ ] **Desenhar a aplicação pensando e entendendo o usuário**

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

## 4. Considerações gerais

- Este projeto deve ser resolvido individualmente.
- O projeto será entregue subindo o seu código no GitHub (commit/push) e o
  deploy será feito no GitHub Pages. Se não sabe o que é o GitHub, não se
  preocupe, você aprendera durante o projeto.
- Tempo para completar: tempo referência 2 semanas.

## 5. Critérios de aceitação mínimos do projeto

Use o alfabeto simples (somente maiúsculas e sem ç):

- A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### Definição do produto

 A ideia do projeto, é um diario secreto, que a primeira vista se assemelha com o twiter, sendo 
 assim, a pessoa consegue desabafar, e quem estiver ao redor não perceberá que não é o twiter, 
 garantindo a privacidade de quem usa. Será usado principalmente por jovens, que anseiam por mais 
 privacidade/liberdade. O objetivo maior de quem usa, é ter os beneficios de um diario online, ao 
 mesmo tempo que quem está ao redor não perceba e se perceber a cifra será uma barreira aos curiosos.
 
 ### Interface do usuário (UI)

A Desenho inicial.
![Esboço UX](https://github.com/alinerc27/SAP007-cipher/blob/main/src/img/esboço_ux.jpeg)

B Prototipo via figma.
![Prototipo UX](https://github.com/alinerc27/SAP007-cipher/blob/main/src/img/Prototipagem_UX.png)

### Scripts / Arquivos


- [ ]O sistema deve ser usado online, como uma rede social seria, porém o usuario só interage com ele 
mesmo. Tem a funcionalidade de cifrar um texto, e também decifrar. Ambos os campos aceitam, 280
caracteres de limite.
- [ ]Os usuarios são todas as pessoas que sintam falta de mais privacidade.
- [ ]O produto resolve o problema do usuario com sua discrição e por cifrar corretamente as palavras 
inseridas.
