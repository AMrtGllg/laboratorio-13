let entrada6 = prompt("Ingrese nombres separados por coma: ");
function eliminarDuplicados(arr) {

    let resultado = Array.from(newSet(arr));
    alert("Nombres sin duplicados: " + resultado.join(", "));
}
    let arr6 = entrada6.split(",");
eliminarDuplicados(arr6);