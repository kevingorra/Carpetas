let acumulador1 = 0;
let acumulador2 = 0;
let jugador = 1;

function nuevapartida(){
  document.getElementById("resultado2").value= 0
  document.getElementById("resultado1").value= 0
  document.querySelector("h3").innerHTML= "Resultado";
  acumulador1= 0
  acumulador2= 0
}
function cambiarjugador(){
  if(jugador==1){
    jugador=2
    document.querySelector("h4").innerHTML= "<p> Jugador2 </p>"
    document.querySelector("h2").innerHTML= "Jugador1"
  }else{
    jugador=1
    document.querySelector("h2").innerHTML= "<p> Jugador1 </p>"
    document.querySelector("h4").innerHTML= "Jugador2"
  }
}
function tirardados(){
  var movdado = Math.floor(Math.random() * 6) + 1;
  if(jugador==1){
      document.querySelector(".img1").setAttribute("src","./img/dado" + movdado +".png");
      acumulador1 = movdado + acumulador1
      document.getElementById("resultado1").value=acumulador1

    if(acumulador1==21){
      document.querySelector("h3").innerHTML= "Gana el Jugador1"

    }else if(acumulador1 >21 ){
      document.querySelector("h3").innerHTML= "El jugador 1 se paso de 21 <br><p>'PERDISTE'</p> <br> El jugador 2 es el <p>'GANADOR' </p>";
  
    }else if (movdado == 3){
        jugador=2 
        document.querySelector("h4").innerHTML= "<p> Jugador2 </p>"
        document.querySelector("h2").innerHTML= "Jugador1"
        alert("El jugador 1 saco 3 'CAMBIO DE JUGADOR'")

      }else if(movdado == 1){
      acumulador1 = 0
      alert("El jugador 1 saco 1 'PERDISTE LOS PUNTOS")
      document.getElementById("resultado1").value=0
    }
 
  }else{
    document.querySelector(".img2").setAttribute("src","./img/dado" + movdado +".png");

    acumulador2 = movdado + acumulador2
    document.getElementById("resultado2").value=acumulador2

    if(acumulador2==21){
      document.querySelector("h3").innerHTML= "Gana el Jugador2";
      
    }
    else if(acumulador2 >21 ){
      document.querySelector("h3").innerHTML= "El jugador 2 se paso de 21 puntos <br><p>'PERDISTE'</p> <br> El jugador 1 es el <p>'GANADOR' </p> ";
     
    }
      else if (movdado == 3){
        jugador=1 
        document.querySelector("h2").innerHTML= "<p> Jugador1 </p>"
        document.querySelector("h4").innerHTML= "Jugador2"
        alert("El jugador 2 saco 3 'CAMBIO DE JUGADOR'")
      }
    else if(movdado == 1){
      acumulador2 = 0
      alert("El jugador 2 saco 1 'PERDISTE LOS PUNTOS")
      document.getElementById("resultado2").value=0
    }
  }
}



