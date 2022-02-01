// Dataset

// HTMLElment
// TOdo elemento HTML do DOM herda propriedade e métodos do construtor HTMLElement

const h1 = document.querySelector('h1');
console.log(Object.prototype.toString.call(h1))
// HTMLHeadingElement > HTMLElment > Element > Node > EventTarget

// Dataset
// dataset é uma propriedade de HTMLElement, essa prpriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave /valor, com todos os atributos do elemento html que começaram com data-.

//  
//   <span data-anime="left" data-tempo="2000">Um span</span>

// Ambos os valores selecionam a mesma div acima.
let div = documento.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}


// Data Atributes
// Os atributos e valroes que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

<div data-anima="left" data-tempo="1000">Div</div>
<div data-anima="right" data-tempo="2000">Div 2</div>

const divs = document.querySelectorAll('[data-animal]')
divs.forEach((div) => {
    div.classList.add(div.dataset.anima);
})

// Adiciona em cada div
// Uma classe com o mesmo nome
// que o valor de data

// Data vs Class
// A vatangem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.


<div data-anima="left" data-tempo="1000">Div 1</div>
<div class="anima-left tempo-1000">Div 2</div>


// Nomenclatura
// Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

<div data-anima-sroll="left" >Div 1</div>

const div = document.querySelector('[data-anima=scroll]');
div.dataset;
// {animaScroll: 'left}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delet div.dataset.animaScroll; // Remove o atributo


// Módulos
// Manutenção
// Dividir o código em diferentes arquivos com funções especificadas (módulos) facilita a manuntenção

// Compartilhamento
// o compartilhamento de código com outros projetos é facilitado, pois basta você importar um módulo específico

// Nativo no ES6+
// Ferramentas que permitem dividirmos o código em módulos já existem a bastante tempo. Grunt, Gulp, Webpack, Browserify, Parcel e outra. Mas agora os módulos são nativos.


// Modules ES6
// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar(use default se for único). E import nome from arquivo.js para importar

<script type="modeu" src="js/script.js"></script>

// arquivo scroll-suave.js
export default function scrollSuave() {

};

// arquivo scropt.js
import scrollSuave from './scroll-suave.js'

scrollSuave();


// Named Exports
// Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.

// arquivo scroll.js
export function scrollSuave() {
    ...
};

export function scrollAnimacao() {
    ...
};

import { scrollSuave as novoNome} from './scroll.js'

novoNome();

// arquivo script.js
import {scrollSuave, scrollAnimacao} from './scroll.js'/
scrollSuave();
scrollAnimacao();


// Importe todos os valores em um objeto
import * as scroll from './scroll.js'
scroll.scrollSuave();
scroll.scrollAnimacao();
console.log(scroll)


// Valores do Export
// Podemos exportar objetos, funções, classes, números, strings e mais

//arquivo configuracao.js
export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {};


// arquivo script.js
import * as conf from './configuracao.js'
conf.str;
conf.obj;
conf.ano;

// Características
// Scrict mode
// 'use strict por padrão em todos os arquivos

// Variáveis ficam no module apenas
// Não vazam para o escopo global

// This fora de um objeto faz referência a undefined
// Ao invês de fazer referência ao window.

// Assíncrono


// use strict
// O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo.

'use strict'

nome = 'Ford'; // erro, variável global
delete Array.prototype; // erro, não deletável
window.top = 200; // erro, não pode mudar
const arguments = 3.14; // escrever em palavra reservada

// Por padrão todo module está no modo estrito


// setTimemout()
//setTimeout(callback, tempo, arg1, arg2, ...) método assíncrono que ativa o callback após tempo. não existe garantia de que o código será executado exatamente após o tempo, pois o callback entra na fila e espera pela Call Stack estar vazia.

function espera(texto) {
    console.log(texto);
}
setTimeout(espera, 1000, 'Depois de 1s');