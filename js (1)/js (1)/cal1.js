let numero1, numero2, operacion


numero1 = Number (prompt("ingrese numero 1"));
numero2 = Number (prompt("ingrese numero 2"));
operacion = Number (prompt("1.suma\n2. resta\n 3. multiplicacion \n 4. division"))


resultado = (operacion ==1)?numero1 + numero2:
            (operacion ==2)?numero1 - numero2:
            (operacion ==3)?numero1 * numero2:
            (operacion ==4)?numero1 / numero2:
            "error"
console.log(resultado)