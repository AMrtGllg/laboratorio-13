let entrada10 = prompt("Ingrese pares clave:valor separados por coma (ej: Peru:Lima,Chile:Santiago):");

let pares = entrada10.split(",").map(txt => {
  let [k, v] = txt.split(":");
  return [k ? k.trim() : "", v ? v.trim() : ""];
}).filter(([k, v]) => k !== "" && v !== ""); 

let mapa = new Map(pares);

let invertido = new Map();
for (let [clave, valor] of mapa) {
  if (invertido.has(valor)) {
    invertido.set(valor, invertido.get(valor) + ", " + clave);
  } else {
    invertido.set(valor, clave);
  }
}

let out = "Map invertido:\n";
invertido.forEach((v, k) => { out += k + ": " + v + "\n"; });
alert(out);
