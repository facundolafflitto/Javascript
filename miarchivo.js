//Calculadora Javascript
alert("Bienvenidos a la calculadora!")

// Calculadora

function Calculadora(primerNumero, segundoNumero, tercerNumero, operacion){
    switch(operacion){
        case '+':
            return (primerNumero) + (segundoNumero) + (tercerNumero)
        case '-':
            return primerNumero - segundoNumero - tercerNumero
        case '*':
            return primerNumero * segundoNumero * tercerNumero    
        default:
            return 0    
    }   
}    

let numero1 = parseInt(prompt(" Ingrese el primer numero "))
let numero2 = parseInt(prompt(" Ingrese el segundo numero "))
let numero3 = parseInt(prompt(" Ingrese el tercer numero"))
let operacion = prompt( "Ingrese la Operacion")

let resultado = Calculadora (numero1, numero2, numero3, operacion)

alert(resultado)

if( resultado < 100) {
    alert("El precio es menor a 100")
} else if (resultado < 50) {
    alert(" El precio es menor a 50")
} else if (resultado <= 100) {
    alert ( "el precio es menor o igual a 100 ")
} else {
    alert( "El precio es mayor a 100")
}
