
//ejercicio 1

/* D.E { nombre , nota1 , nota2 , nota3 }
 D.S { notadefinitiva, observacion < 3 "perdio" >3 "gano"}

 let nombre, nota1, nota2, nota3, notadef, observacion;

 nombre = "kevin valencia"

 nota1= 4;
 nota2= 4.5;
 nota3= 3;

 // datos de proceso ..calcular nota definitiva

 notadef = (nota1 + nota2 + nota3)/3;

 // preguntamos si perdio o gano segun el promedio

 if (notadef < 3)
    { observacion= "perdio";}

else
    { observacion = "felicitaciones Gano";}

    console.log ("nota definitiva"+ notadef);
    console.log ("estudiante :", nombre , "\nobservacion:", observacion); */


// ejercicio 2

 /*nombre = prompt("nombre: ");

 nota1= Number ( prompt("nota1--->"));
 nota2= Number ( prompt("nota2--->"));
 nota3= Number ( prompt("nota3--->"));

 // datos de proceso ..calcular nota definitiva

 notadef = (nota1 + nota2 + nota3)/3;

 // preguntamos si perdio o gano segun el promedio

 if (notadef < 3)
    { observacion= "perdio";}

else
    { observacion = "felicitaciones Gano";}

    document.write ("<p> nota definitiva"+ notadef ,"</p>");
    document.write ("<p> estudiante :", nombre , "\nobservacion:", observacion ,"</p>");*/


    /* ejercicio 3

    let producto, precio, cantidad, subtotal, descuento, iva, valorneto


    producto = prompt ( "producto : ");
    precio = Number( prompt ( "precio : $ ") );
    cantidad = Number (prompt( "candidad :"));

    subtotal =  precio * cantidad
    descuento =  subtotal * 29/100
    iva =  (subtotal - descuento) * 19 /100
    valorneto = subtotal + iva - descuento

    document.write("subtotal : " + subtotal );
    document.write(" descuento : "+descuento);
    document.write(" iva : " + iva);
    document.write("neto : " + valorneto); */

    /*ejercicio 4 Si anidado


    let nombre, notadef, mensaje

    nombre = "kevin"
    notadef = 5;

    if ( notadef >= 0 && notadef <= 5 )
    { 
        if ( notadef < 2)
            {mensaje = "usted perdio no puede habilitar"}
        else if ( notadef < 3)
                { mensaje = "usted perdio puede habilitar"}
        else if ( notadef < 4 )
                { mensaje = "felicitaciones gano"}
        else if ( notadef < 4.5 )
                { mensaje = "felicitaciones eres muy bueno"}
        else
            { mensaje = "felicitaciones excelente"}

    }
    else{
        mensaje = "Error la nota no esta en el rango "

    }
    console.log(notadef);
    console.log(mensaje);
*/

    /* ejercicio 3

    let producto, precio, cantidad, subtotal, descuento, iva, valorneto


    producto = prompt ( "producto : ");
    precio = Number( prompt ( "precio : $ ") );
    cantidad = Number (prompt( "candidad :"));

    subtotal =  precio * cantidad
    descuento =  subtotal * 29/100
    iva =  (subtotal - descuento) * 19 /100
    valorneto = subtotal + iva - descuento

    document.write("subtotal : " + subtotal );
    document.write(" descuento : "+descuento);
    document.write(" iva : " + iva);
    document.write("neto : " + valorneto); */

    let producto, precio, cantidad, subtotal, descuento, valordesc,neto

    producto = "cama"
    precio = 1000
    cantidad = 40

    subtotal = cantidad * precio

    console.log (subtotal)
       

          if( cantidad > 1 && cantidad <= 10 ){
              descuento = "5%" }
             else if ( cantidad >= 11 && cantidad <= 20)
             { descuento = "10%"}
        else if (cantidad >= 21 && cantidad < 30){
            descuento = "15%"}
        else if  (cantidad >= 31 && cantidad <= 40){
            descuento = "20%"}
            else {
                descuento = "25%"}

              

        console.log(" descuento : "+ descuento);
    

        
