let entrada = prompt("Ingrese valores separados por coma:");
function tieneDuplicados(arr) {
  let hayDup = new Set(arr).size !== arr.length;
  alert("¿Hay duplicados? " + hayDup);
}
let arr = entrada.split(", ");
tieneDuplicados(arr);
