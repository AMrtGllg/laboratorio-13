let entradaPrecios = prompt("Productos y precios (ej: mouse:10, teclado:25):");
let entradaLista = prompt("Lista de compras (ej: mouse, teclado, mouse):");

function precioTotal(listaCompras, productosPrecios) {
  let total = 0;
  for (let producto of listaCompras) {
    let p = producto.trim().toLowerCase(); 
    if (productosPrecios.has(p)) {
      total += productosPrecios.get(p);
    }
  }
  alert("Precio total: " + total);
}

let map = new Map(
  entradaPrecios.split(",").map(par => {
    let [k, v] = par.split(":");
    return [k.trim().toLowerCase(), parseFloat(v)];
  })
);

let lista = entradaLista.split(",")
precioTotal(lista, map);
