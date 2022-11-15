function saludar(){
    document.writeln("hola como estas ");
}
function saludarnombre(){
    let nombre = prompt("ingrese el nombre");
    document.writeln(nombre + " hola")
}
let edad
function validaredad(edad){
    edad>=18?document.writeln("si puede votar"):document.writeln("no puede votar ")
}