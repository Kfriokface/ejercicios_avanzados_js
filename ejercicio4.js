// 1. Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

// Haz varios ejemplos y compruébalos.

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
  if ( text.length && array.includes(text)) {
    for(i= 0; i < array.length; i++) {
      if (array[i] === text) {
        console.log("La posicion es: " + (i + 1));
      }
    }
  }
  else {
    console.log("No has introducido un texto válido");
  }
}

findArrayIndex(mainCharacters, 'Anakin');
findArrayIndex(mainCharacters, 'Perico de los palotes');
findArrayIndex(mainCharacters, '');
findArrayIndex(mainCharacters, 'Obi-Wan');
findArrayIndex(mainCharacters, 'Jar Jar Binks');
