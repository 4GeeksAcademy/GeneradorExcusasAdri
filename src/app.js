let quien = [
  "mi perro",
  "mi abuela",
  "mi hermana pequeña",
  "mi vecino el loco"
];
let acto = [
  "se comió una mosca muerta",
  "vomitó",
  "consiguió un record Guiness cazando palomas",
  "mordió a un niño de 3 años"
];
let donde = [
  "en el autobús",
  "en la puerta de casa",
  "en pleno colegio",
  "en el mar del Caribe"
];
let cuando = [
  "antes de clases.",
  "mientras jugaba al minecraft",
  "durante mi almuerzo",
  "cuando estaba ligándome a mi gymsis"
];

function generadorDeExcusas() {
  return (
    quien[Math.floor(Math.random() * quien.length)] +
    " " +
    acto[Math.floor(Math.random() * acto.length)] +
    " " +
    donde[Math.floor(Math.random() * donde.length)] +
    " " +
    cuando[Math.floor(Math.random() * cuando.length)]
  );
}

document.getElementById("excusa").innerHTML = generadorDeExcusas();
