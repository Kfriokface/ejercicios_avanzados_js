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

// Como hay que reutilizar la función en el siguiente apartado se tiene en cuenta que el array comienza por el 0.
// Si quiseramos saber la posición real contando desde el 1 habría que sumar +1 a la posición (i + 1);
function findArrayIndex(array, text) {
  if ( text.length && array.includes(text)) {
    for(i= 0; i < array.length; i++) {
      if (array[i] === text) {
        let position = i;
        console.log("La posicion es: " + position);
        return position;
      }
    }
  }
  else {
    console.log("No existe ese personaje ni en todo el Universo Expandido");
  }
}

// Ejemplos parte 1.
console.log("Ejemplos para la primera parte del ejercicio: ")
findArrayIndex(mainCharacters, 'Anakin');
findArrayIndex(mainCharacters, 'Perico de los palotes');
findArrayIndex(mainCharacters, '');
findArrayIndex(mainCharacters, 'Obi-Wan');
findArrayIndex(mainCharacters, 'Jar Jar Binks');


// 2. Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.

// Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

// Finalmente retorna el array.

// De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

function removeItem (array, text) {
  let pos = findArrayIndex(array, text);
  // Se tiene en cuenta que la posicion que puede llegar es 0 y no se puede chequear si existe 'pos' porque en ese caso sería false (pos = 0).
  if (typeof pos === "number") {
    for(i= 0; i < array.length; i++) {
      if (i === pos) {
        array.splice(i, 1);
        console.log(array);
        return array;
      }
    }
  }
}

// Ejemplos parte 1.
console.log("\nEjemplos para la segunda parte del ejercicio: ")
removeItem (mainCharacters, "Luke");
removeItem (mainCharacters, "Agapornis");
removeItem (mainCharacters, "");
removeItem (mainCharacters, "Chewbacca");