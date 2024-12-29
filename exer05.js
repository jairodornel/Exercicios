var tro= document.createElement('h2');

var texto = document.createTextNode('Conteudo de H2');

tro.appendChild(texto);

//Trocando 

var peg = document.querySelector('div')

var pai = peg.parentNode;

pai.replaceChild(tro,peg);