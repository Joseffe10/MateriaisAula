var baseElement = document.getElementById('base');
var alturaElement = document.getElementById('altura');

var buttonElement = document.querySelector('#exemplo button');
var paragraphElement = document.querySelector('#exemplo p');

function calcularAreaRetangulo(){   
    var base = baseElement.value;
    var altura = alturaElement.value;
   
    a = base * altura;

    paragraphElement.innerHTML = a;
}

buttonElement.onclick = calcularAreaRetangulo;