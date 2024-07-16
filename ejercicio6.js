// Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

// Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap (array, init, end) {
  if (init < 0 || init >= array.length || end < 0 || end >= array.length) {
    console.error("No se puede realizar el intercambio porque algún valor introducido está fuera del rango del array");
    return;
  }
  let moved = array[init];
  array[init] = array[end];
  array[end] = moved;
  console.log(array);
}

//Hay que tener en cuenta que el valor 0 indica el primer elemento del array
swap(fantasticFour, 1, 3);
