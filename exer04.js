var tt= document.createElement('h3');

var texto = document.createTextNode('Texto do H3 !!');

tt.appendChild(texto);

// criando h3 no html 

var corpo = document.querySelector('body');

corpo.appendChild(tt);


// Trocando tag h1 por h4 


var ttt= document.createElement('h4');

var textt= document.createTextNode('Texto do h4 !!!');

ttt.appendChild(textt);

//Seleciona o que quer trocar h1
var tro= document.querySelector('h1');

var pai= tro.parentNode;

//Troca de h1 por h4

pai.replaceChild(ttt,tro); 




