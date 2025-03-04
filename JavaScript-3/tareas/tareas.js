// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
   return (array[0]);
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return (array[array.length-1]);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var length = array.length;
  for (var i = 0; i < length; i++) {
  array[i] += 1;
}
  return array; 

}
   
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var palabranueva = ""
  for (i = 0; i < palabras.length; i++){
  palabranueva = palabranueva + " " + palabras[i]
  }
  let part = palabranueva.slice(1);
  return part;
}
  
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    for (let i = 0; i < array.length; i++){
      if (elemento == array[i]) {
        return true;
      }
    }
    return false;
}
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
let total = numeros.reduce((a, b) => a + b, 0);
return total;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = 0;
  for(let i=0; i < resultadosTest.length; i++){
      total = total + resultadosTest[i]
  }
      return  total / resultadosTest.length
}  

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maximo = numeros[0]; // ==> [1]
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > maximo) { 
      maximo = numeros[i]; // ==> 2
    }
  }
  return maximo;
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let cont = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19) { // Aquí es mayor a 10, no mayor o igual
      cont.push(arreglo[i]);
    }
  }
  return cont.length;
 }

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  }  else {
    return "Es dia Laboral"
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroString = String(n)
  return numeroString[0] === "9"
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let primerValor = arreglo[0];
  for (let i=1 ; i< arreglo.length; i++ ) {
  if (primerValor !== arreglo[i]) { 
  return false }
  else {
    return true }
  }
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  const arrayuno=['Marzo','Noviembre','Enero']
  let findEnero
  let findMarzo
  let findNoviembre
  array.includes('Enero')?findEnero=true:findEnero=false
  array.includes('Marzo')?findMarzo=true:findMarzo=false
  array.includes('Noviembre')?findNoviembre=true:findNoviembre=false;
  return findEnero===true&&findMarzo===true&&findNoviembre===true?arrayuno:"No se encontraron los meses pedidos"
}
   
    

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (let i=0; i< array.length; i++) {
    if (array[i] > 100 && array[i]< 201 && array[i] >= 0) {
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
