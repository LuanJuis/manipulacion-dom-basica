var nombre = Juan;
var apellido = Medina;
var nombreDeUsuarioEnPlatzi = Octojuan;
var edad = 30
var correoElectronico = octojuan@gmail.com  
var mayorDeEdad = true;
var dineroAhorrado = 5000;
var deudas = 2000;

var nombreCompleto = nombre + " " + apellido


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function nombreCompleto(completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free") {
    console.log("Sólo puedes tomar los cursos gratis")
}
else if(tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
}
    

var i = 0;

while(i<0) {
    console.log("el valor de i es: " +i)
    i++
}

var i = 10;

while(i>=2) {
    console.log("el valor de i es: " +i)
    i--
}

var frutas = ["naranja", "pera", "mango"];

function show(array) {
    console.log(frutas[0]);
}
show(frutas)

var frutas = ["naranja", "pera", "mango"];

function show(array) {
    for(let i=0; i<=array.length; i++){
        console.log(array[i]);
    }
}
show(frutas)