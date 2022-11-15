 

let acumulador1 = 0;
let acumulador2 = 0;
let jugador = 1;



function nuevapartida(){

  document.getElementById("resultado2").value=0
  document.getElementById("resultado1").value=0
  document.querySelector("h3").innerHTML= "Resultado";

  acumulador1=0
  acumulador2=0
}

function cambiarjugador(){
  if(jugador==1){
    jugador=2
  }else{
    jugador=1
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
      acumulador1=0
      document.getElementById("resultado1").value=0;

    }
    else if(acumulador1 >21 ){
      document.querySelector("h3").innerHTML= "El jugador 1 se paso de 21 'PERDISTE' vuelve a Intentar";
      acumulador1=0;
      document.getElementById("resultado1").value=0}
      else if (movdado == 3){
        jugador=2 
        alert("El jugador 1 saco 3 'CAMBIO DE JUGADOR'")
      }
    else if(movdado == 1){
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
    else if(acumulador1 >21 ){document.querySelector("h3").innerHTML= "El jugador 2 se paso de 21 'PERDISTE' vuelve a Intentar";
      acumulador2=0 
      document.getElementById("resultado2").value=0}
      else if (movdado == 3){
        jugador=1 
        alert("El jugador 2 saco 3 'CAMBIO DE JUGADOR'")
      }
    else if(movdado == 1){
      acumulador2 = 0
      alert("El jugador 2 saco 1 'PERDISTE LOS PUNTOS")
      document.getElementById("resultado2").value=0
    }

    
  }
  

  }
  
  
  
  
  
  // function tirardados(){setTimeout(function(){
    //   var movdado2 = Math.floor(Math.random() * 6) + 1;
    //   document.querySelector(".img2").setAttribute("src","/img/dado" + movdado2 +".png");
    
    // },250)}
    
    
    
    
    // setTimeout(function(){
      
    // },250)
  
  // var movdado1 = Math.floor(Math.random() * 6) + 1;
  //   document.querySelector(".img2").setAttribute("src","/img/dado" + movdado2 +".png");
   
   
/*if (movdado1 === movdado2)
{0
  document.querySelector("h1").innerHTML= "empata";
}
else if (movdado1 < movdado2)
{
  document.querySelector("h1").innerHTML = ("el jugador 2 gana");
}
else
{
  document.querySelector("h1").innerHTMLg = ("el jugador 1 gana");
}*/



