let entrada14 = prompt("Ingresa empleados con formato id,nombre,area,salario separados por punto y coma. Ejemplo:\n1,Juan,TI,3000;2,Ana,TI,3200;3,Carlos,Adm,2100");
function gestionarEmpleados(empleados) {
  const mapaArea = new Map();
  empleados.forEach(({id, nombre, area, salario}) => {
    if (!mapaArea.has(area)) {
      mapaArea.set(area, { empleados: [], totalSalarios: 0 });
    }
    const areaData = mapaArea.get(area);
    areaData.empleados.push(nombre);
    areaData.totalSalarios += salario;
  });
  let salida = "";
  mapaArea.forEach((data, area) => {
    let promedio = data.totalSalarios / data.empleados.length;
    salida += area + ": empleados [" + data.empleados.join(", ") + "], promedio " + promedio.toFixed(2) + "\n";
  });
  alert(salida);
}
let empleados14 = entrada14.split(";").map(str=>{
  let [id, nombre, area, salario] = str.split(",");
  return {id: parseInt(id), nombre: nombre, area: area, salario: parseFloat(salario)};
});
gestionarEmpleados(empleados14);