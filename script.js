// Las siguientes variables se definen en el ámbito global
let tipoDeOperacion = parseInt(prompt("Selecciona el tipo de operación:\n1: Suma,\n2: Resta,\n3: Multiplicación,\n4: División\nSolo coloca el número de la opción deseada"));
let num1 = parseFloat(prompt ("Ingresa el dato 1"));
let num2 = parseFloat(prompt ("Ingresa el dato 2"));

// Funciones establecidas
function multiplicacion() {
  return num1 * num2;
}

function suma() {
  return num1 + num2;
}

function resta() {
  return num1 - num2;
}

function divicion() {
  return num1 / num2;
}

// Variable para almacenar el resultado final
let resultado; 

switch (tipoDeOperacion) {
    case 1:
        resultado = suma(); 
        break;
        
    case 2:
        resultado = resta();
        break;
        
    case 3:
        resultado = multiplicacion();
        break;
        
    case 4:
        resultado = divicion(); 
        break;
        
    default:
        // Maneja el caso en que el usuario no ingresó 1, 2, 3 o 4
        resultado = "Error: Opción de operación no válida.";
}

// Informa al usuario:
alert("El total es: " + resultado);

// Deja un registro en la consola para el desarrollador:
console.log("Operación completada. Resultado: " + resultado);