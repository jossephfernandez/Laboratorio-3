// JavaScript

function realizarOperacion() {
    let continuar = true;

    while (continuar) {
        // Pide los dos números y la operación
        let num1 = Number(prompt("Ingrese el primer número:"));
        let num2 = Number(prompt("Ingrese el segundo número:"));
        
        // Valida que los números sean correctos
        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingrese números válidos.");
            continue;  // Si los números no son válidos, reinicia el bucle
        }

        let operacion = prompt("Escoge una operación (suma, resta, multiplicacion, divicion) o escribe 'salir' para terminar:");

        // Si el usuario elige "salir", muestra un mensaje y termina el bucle
        if (operacion === "salir") {
            alert("¡Hasta luego! Gracias por usar la calculadora.");
            continuar = false;  // Sale del bucle
        } else {
            // Realiza la operación según lo que el usuario elija
            switch (operacion) {
                case "suma":
                    alert("La suma de los dos números es: " + (num1 + num2));
                    break;
                case "resta":
                    alert("La resta de los dos números es: " + (num1 - num2));
                    break;
                case "multiplicacion":
                    alert("La multiplicación de los dos números es: " + (num1 * num2));
                    break;
                case "divicion":
                    if (num2 === 0) {
                        alert("No está permitida la división entre cero. Ingrese otro valor.");
                    } else {
                        alert("La división de los dos números es: " + (num1 / num2));
                    }
                    break;
                default:
                    alert("Operación no válida. Por favor, ingrese una operación válida.");
            }
        }

        // Pregunta si el usuario quiere realizar otra operación
        continuar = confirm("¿Quieres realizar otra operación?");
    }
}
