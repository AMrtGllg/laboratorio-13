function autoDetalles() {
  const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalles: function() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
  };
  alert(auto.detalles());
}
autoDetalles();