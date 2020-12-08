// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Hola Mundo';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1.618;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var string = str;
  return string;
}
devolverString('Hola mundo')

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var opSuma = x + y;
    return opSuma;
}
suma(9,2)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var diferencia = x - y;
  return diferencia;
}
resta(3,9);

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var producto = x * y;
  return producto;
}
multiplica(5,3);

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
    var div = x / y;
  return div;
}
divide(8,4);

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y){
    return true;
  }
  return false;
}
sonIguales(7,7)
sonIguales(8,33)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
 // var = longitud = str1.length / str2.length;
  if (str1.length === str2.length){
    return true;
  }
  return false;
}
tienenMismaLongitud('Juana', 'Andres')
tienenMismaLongitud('Carlos', 'Andres')

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  return false;
}
menosQueNoventa(59)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true;
    }
    return false;
}
mayorQueCincuenta(23)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
  return resto
}
obtenerResto(32,9)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var numPar = num % 2;
  if (numPar === 0){
    return true;
  }
  return false;
}
esPar(49)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var numImpar = num % 2;
  if (numImpar === 1){
    return true;
  }
  return false;
}
esImpar(2)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num,2);
  return cuadrado;
}
elevarAlCuadrado(7)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num,3);
  return cubo;
}
elevarAlCubo(8)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var exp = Math.pow(num, exponent);
  return exp;
}
elevar(2,8)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondear = Math.round(num);
  return redondear;
}
redondearNumero(4.6)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redArriba = Math.ceil(num);
    return redArriba;
}
redondearHaciaArriba(3.0004)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var admir = str + "!";
  return admir;
}
agregarSimboloExclamacion('Hola mundo')

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombres = nombre + ' ' + apellido;
  return nombres;
}
combinarNombres('Antonio', ' Carmona')

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var saludo = 'Hola ' + nombre + '!';
  return saludo;
}
obtenerSaludo('Martin')

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var AreaRec = alto * ancho;
  return AreaRec;
}
obtenerAreaRectangulo(2,3)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
