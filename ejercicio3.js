let entrada = prompt("Ingresa números separados por coma (ejemp: 2,4,5): ");
function doblarNumeros(){
    let arr = entrada.split(",").map(Number);
    let resultado = arr.map(num => num*2);
    alert("Resultado: " + resultado);
}
doblarNumeros();