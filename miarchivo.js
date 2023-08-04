//Calculadora Javascript
//alert("Bienvenidos a la calculadora!")

// Calculadora

//let nombre = prompt("Por favor ingresu su nombre")
//let edad = parseInt(prompt(" Por favor ingrese su edad "))

//const datos = [nombre, edad]

//alert(" BIENVENIDO/A " + nombre )

//console.log(datos)

//function Calculadora(primerNumero, segundoNumero, tercerNumero, operacion){
//    switch(operacion){
//        case '+':
//            return (primerNumero) + (segundoNumero) + (tercerNumero)
//        case '-':
//            return primerNumero - segundoNumero - tercerNumero
//        case '*':
//            return primerNumero * segundoNumero * tercerNumero       
//       case '/':
//            return (primerNumero) / (segundoNumero) / (tercerNumero) 
//        default:
//            return 0         
//    }   
//}    

//let numero1 = parseInt(prompt(" Ingrese el primer numero "))
//let numero2 = parseInt(prompt(" Ingrese el segundo numero "))
//let numero3 = parseInt(prompt(" Ingrese el tercer numero"))
//let operacion = prompt( "Ingrese la Operacion")

//alert(resultado)

//if( resultado < 100) {
//    alert("El precio es menor a 100")
//} else if (resultado < 50) {
//    alert(" El precio es menor a 50")
//} else if (resultado <= 100) {
//    alert ( "el precio es menor o igual a 100 ")
//} else {
//    alert( "El precio es mayor a 100")
//}

const carrito = document.getElementsByClassName('resultados')

addEventListener('click', respuesta)

function respuesta() {
  console.log('Respuesta al click');
}



addEventListener('click', () => {
  console.log('Respuesta del evento');
})

const products = [
  { id: 1, titulo: "Laser", descripcion: "Luz para eliminar imperfecciones faciales" },
  { id: 2, titulo: 'Limpieza', descripcion: 'Limpieza Facial' },
  { id: 3, titulo: 'Microdermoabrasión', descripcion: 'Eliminacion de celulas muertas' },
]

const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor)
}

guardarLocal('listadeproductos', JSON.stringify(products))











