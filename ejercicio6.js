let entrada = prompt("Ingrese nombres separados por coma:");
function eliminarDuplicados(arr) {
  let resultado = Array.from(new Set(arr));
  alert("Nombres sin duplicados: " + resultado.join(", "));
}
let arr = entrada.split(", ");
eliminarDuplicados(arr);
