let entrada = prompt("Ingrese palabras separadas por espacio:");
function contarPalabras(texto) {
  const mapa = new Map();
  texto.toLowerCase().split(/\s+/).forEach(palabra => {
    mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
  });
  let resultado = '';
  mapa.forEach((v,k)=>resultado += k + ": " + v + "\n");
  alert("Cuenta de palabras:\n" + resultado);
}
contarPalabras(entrada);