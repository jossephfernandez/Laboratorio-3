 //javascrip//

 function realizarOperacion(){
    let num1 = Number(document.getElementById (`num1`).value);
    let num2 = Number(document.getElementById (`num2`).value);
    let operacion = document.getElementById (`Operaciones`).value;

    switch(operacion){

    case"suma":
        alert ("La suma de los 2 numeros es: " + (num1+num2));
    break;
    case "resta":
        alert ("La resta de los 2 numeros es: " + (num1-num2));
    break;
    case "multiplicacion":
        alert("La multiplicacion de los 2 numeros es: " + (num1*num2));
    break;

    case "divicion":
        if(num2 === 0){
            alert("No esta permitido la divición entre cero, ingrese otro valor.");
        }else{
        alert ("La divición de los 2 numeros es: " + (num1/num2));
        }
    break;
    }



}