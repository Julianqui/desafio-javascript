let numero = prompt('Ingresa el total que deberas pagar y te dire las tres cuotas con interes agregado que debes pagar')

function cuotas(numero){
    let cadaCuota = numero / 3;

    alert(`Cada cuota es de ${cadaCuota} sin interes`)

    let interes = cadaCuota * 1.21

    alert(`Cada cuota es de ${interes} con interes`)

}

cuotas(numero)



/*
function Generar() {
    var aa = ""
    var tabla = document.getElementById('numero').value;
    for (var i = 1; i < 10; i++) {
        aa += tabla+" X "+i+" = "+(i*tabla)+"<br>";
    }
    document.getElementById("respuesta").innerHTML = aa;
}
*/




/*let apellido = prompt('Bievenidoo!! ¿Cual es tu apellido?' )

let verificarApellido = apellido.toLowerCase()

let confirmar = confirm(`Tu apellido es ${verificarApellido}`)

console.log(verificarApellido)

while(confirmar == false || confirmar == true){
    if (confirmar == true){
        let edad = Number(prompt( 'Bienvenido ' + verificarApellido +'. Ingresar tu edad'))

        alert(`Tu edad es ${edad}`)

        if (edad >= 18){
            alert('Puedes ingresar')
            break
        }
        else{
            alert('No puedes ingresar Chau')
            break
        }

    }else {
        let apellido = prompt('Arregla tu apellido')

        let verificarApellido = apellido.toLowerCase()

        confirmar = confirm('Tu apellido es ' + verificarApellido)
    }
}*/




/*console.log(`La suma de los dos numeros es ${resultado}`)

let edad = Number(prompt('Ingresar tu edad'))



if(edad >= 18){
    console.log(`Sos mayor podes ingresar`)
}else {
    console.log(`Sos menor, no podes ingresar`)
}*/






/*
let nombre = prompt('Ingresa tu nombre')
let apellido = prompt('Ingresa tu apellido')
let edad = prompt('Ingresa tu edad')
let numeroFavorito = prompt('Cual es tu numero favorito')

alert(`Tu nombre es ${nombre} ${apellido} y tenes ${edad}. Tu numero favorito es ${numeroFavorito}`)

console.log(`Tu nombre es ${nombre} ${apellido} y tenes ${edad}. Tu numero favorito es ${numeroFavorito}`)




let numer1 = Number(prompt('ingrese un numero'))
let number2 = Number(prompt('ingrese otro numero'))

let resultado = numer1*number2

if(resultado >= 100){
    console.log(`tu numero es ${resultado}`)
    console.log('es mayor o igual a 100')
} else {
    console.log(`tu numero es ${resultado}`)
    console.log('es menor a 100')
}*/
