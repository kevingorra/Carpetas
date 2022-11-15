function subtotal(cantidad, precio){
    return cantidad * precio;
}
function Descuento (sub){
    let vlrdesc;
    if (sub > 5000000)
        vlrdesc = sub *0.05;
    else
        vlrdesc = sub * 0.01;

    return vlrdesc;
}

function neto(sub, descuento){
    let neto
    neto = sub - descuento
    return neto
}



let producto = "portatil";
let cantidad = 1 ;
let precio = 4300000;


let sub ,descuento, Neto;

sub = subtotal (cantidad , precio );
descuento = Descuento(sub);
Neto = neto(sub,descuento);


document.writeln("<p> Producto : "+ producto + "<br> Precio: $ " + precio + "<br> Cantidad : " + cantidad + "</p>");
document.writeln( "<p> Subtotal : $ " + sub +"</p>");
document.writeln ( "<p> Descuento : $ " + descuento + "</p>");
document.write("<p> Neto a Pagar : $ "+ Neto + "</p>");