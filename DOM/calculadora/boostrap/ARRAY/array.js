// crear un array con los nombres de los estudiantes 
//para crear un array se utiliza los corchetes []

let estudiantes = ["Juan","Elver","Susana","Angel","Kevin"]
//imprimir el contenido de un array 


//consola


//documento
document.writeln(estudiantes)

//imprimir la pocision de un elemento 

console.log("el elemento de la poscision 2 es "+ estudiantes[2]);

//insertar un elemento al final del Array --> ( push) 

estudiantes.push("luisa");

//insertar un elemeto en la primera posicion es --> (unshift)
estudiantes.unshift('laura')
console.log(estudiantes);

estudiantes.push('albeiro');
estudiantes.push(258);
console.log(estudiantes)

//ordenar el array sort

estudiantes.sort();
console.log(estudiantes);

//para saber el tamaño del vector (lenght)

console.log('el tamaño del vector es de '+ estudiantes.length);

estudiantes.push('david')

console.log('el elemento de la ultima posicion es '+ (estudiantes[estudiantes.length-1]));

//buscar un dato de un array Indexof
//si devuelve -1 es por que el dato no existe o esta mal digitado
// si el dato existe,  me devuelve la posicion dentro del array

console.log(estudiantes.indexOf("Angel"));







