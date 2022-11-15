

function operador(signo)
{
    const nro1 = Number (document.querySelector('#numero1').value);
    const nro2 =Number (document.querySelector('#numero2').value);
    const verResultado = document.querySelector("#resultado");
    
    switch (signo) {
        case '+': verResultado.value =nro1 + nro2;break;
        case '-': verResultado.value =nro1 - nro2;break;
        case '*': verResultado.value =nro1 * nro2;break;
        case '/': if (nro2 === 0){verResultado.value ="error por 0"}
                        else{verResultado.value = nro1 / nro2}
                        break;
        default:verResultado.value= 'errorrr';break;
            
    }
}
