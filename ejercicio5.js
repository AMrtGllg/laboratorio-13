let entrada = prompt("Ingrese palabras separadas por espacio: ");
function reordenarPalabras(oracion) {
    let resultado = oracion.split(" ").map(p=>p.toUpperCase()).sort();
    alert("Palabras ordenadas: " + resultado.join(", "));
}
reordenarPalabras(entrada);