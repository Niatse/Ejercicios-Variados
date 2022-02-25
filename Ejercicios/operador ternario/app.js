function obtenerNum(){
    var num =document.getElementById("form").value;
(num % 2 == 0) ? document.getElementById("calculo").innerHTML=(`${num} es par`) 
: document.getElementById("calculo").innerHTML=(`${num} es par`)
}


