// let estatura, peso, imc, mensaje

// estatura = 1.71
// peso = 150

// imc =  peso / (estatura * estatura) 

// console.log(imc)

// if (imc <18.5){
//     mensaje = "bajo de peso"
//     }else if ( imc >= 18.5 && imc <24.9){
//         mensaje = "peso normal"}
//     else if (imc >25 && imc <29.9 ){
//         mensaje = "sobrepeso"}
//     else if (imc >30 && imc <34.9){
//         mensaje = "obesidad 1"}
//     else if (imc > 35 && imc < 39.99){
//         mensaje = "obesidad 2"
//     }else { 
//         mensaje = "obesidad 3"
//     }

// console.log(mensaje)


//ternario

let estatura, peso, imc, mensaje

estatura = 1.71
peso = 55

imc =  peso / (estatura * estatura)


    mensaje =   (imc <18.5)? 'bajo de peso':
                (imc <24.9)?'peso normal':
                (imc <29.9)? 'sobrepeso':
                (imc <34.9)? 'obesidad 1':
                (imc <39.99)? 'obesidad2':
                'obesidad 3'
console.log('su indice de masa corporal es :'+imc)
console.log('usted se encuentra : ' + mensaje)


    