
function sumar(){
    let numero1 = 15;
    let numero2 = 20;
    let resultado = numero1 + numero2;
    document.writeln( "Suma... <br>")
    document.writeln(numero1 + " + " + numero2 + " = " + resultado + "<br><br>")
}

function resta(){
    let numero1 = 15;
    let numero2 = 20;
    let resultado = numero1 - numero2;
    document.writeln( "Resta ... <br>")
    document.writeln(numero1 + " - " + numero2 + " = " + resultado + "<br><br>")
}
function multiplicacion(){
    let numero1 = 15;
    let numero2 = 20;
    let resultado = numero1 * numero2;
    document.writeln( "Multiplicacion... <br>")
    document.writeln(numero1 + " * " + numero2 + " = " + resultado + "<br><br>")
}
function division(){
    let numero1 = 4;
    let numero2 = 0;
    let resultado = numero1 / numero2;

    document.writeln( "Division... <br>")
    document.writeln(numero1 + " / " + numero2 + " = " + resultado + "<br><br>")
}
sumar();
resta();
multiplicacion();
division(); 