let entrada = prompt("Ingrese números separados por coma: ");
let arr = entrada.split(",").map(Number);

function filtrarYTransformar(arr){
    let resultado = arr.filter(num => num>=0).map(num => num * num).reduce((a,b) => a+b);
    alert("Resultado: " + resultado);
}
filtrarYTransformar(arr);