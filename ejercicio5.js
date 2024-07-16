// Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

// Que la función use el parametro para simular una tirada de dado y retornar el resultado.

// Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()

function rollDice(sides) {
  if (sides >= 4) {
    let result = Math.floor((Math.random() * sides) + 1);
    console.log(result);
  }
  else {
    console.log("Jamás ví un dado tan pequeño");
  }
}

rollDice(4);
rollDice(8);
rollDice(10);
rollDice(12);
rollDice(20);

// Nota:
// Le sumo uno porque un dado no suele devolver un resultado de 0 en una cara.
// En el caso del D10 el resultado 10 sería igual a la cara 0 (que equivale a 10 en valor).
// Podría haber usado un parámetro min, para indicar el valor mínimo de la tirada pero no lo pedía el ejercicio.


