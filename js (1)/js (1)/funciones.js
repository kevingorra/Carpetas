function Saludar (){
        document.writeln( "hola como estas ... ya eres mero teso en JS <br>")
}


function greetname(name, edad){
    document.writeln (`hola ${name} como estas ....${edad} bienvenido al curso <br> `)
    document.writeln ("hola ", name, " como estas .... bienvenido al curso <br>")
    document.writeln ("hola " + name +" como estas .... bienvenido al curso <br> <br>")
}

let nombre = prompt ("nombre: ")

greetname(nombre + edad);
greetname("juan"+ edad);
greetname("kevin"+ edad);
greetname("luis"+ edad);
Saludar()
