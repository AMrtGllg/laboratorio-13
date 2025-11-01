let entrada = prompt("Ingrese un texto:");
function contarLetras(texto) {
  const resultado = {};
  texto.toLowerCase().split(" ").forEach(letra => {
    if (letra.match(/[a-z]/)) {
      resultado[letra] = (resultado[letra] || 0) + 1;
    }
  });
  let salida = "";
  for (let k in resultado) salida += k + ": " + resultado[k] + "\n";
  alert("Conteo de letras:\n" + salida);
}
contarLetras(entrada);
