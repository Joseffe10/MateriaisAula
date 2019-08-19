var inputElement = document.querySelector('#exemplo input');
var buttonElement = document.querySelector('#exemplo button');
var paragraphElement = document.querySelector('#exemplo p');

function calcularTabuada(){
    var num = inputElement.value;
    for(var i=1;i<=10;i++){
        r = num * i;
        paragraphElement.innerHTML = paragraphElement.innerHTML + r + "<br>";
    }
}

buttonElement.onclick = calcularTabuada;