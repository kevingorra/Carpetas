import {pintarProductos} from './controladorpintar.js'
import {productosBD} from '../helpers/database.js'
import {buscarProductos} from './controladorbuscar.js'
import { ampliarinfoproducto } from './ampliarinfoproducto.js';

let contador = localStorage.getItem('contador')
document.getElementById('carritocontador').innerHTML = contador

console.log(contador)

let reloj=productosBD.filter(function(producto){
    return(producto.tipo=='reloj')
})

pintarProductos(reloj)
buscarProductos(reloj)

let contenedor = document.getElementById ('fila')
contenedor.addEventListener('click', function(evento){

    let producto = ampliarinfoproducto(evento);
    
 localStorage.setItem("infoProducto",JSON.stringify(producto))
 console.log(localStorage.getItem("infoProducto"))

  window.location.href = "./src/views/ampliarinfo.html"

});

