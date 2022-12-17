class TicketManager {
  #precioBaseDeGanancia = 0.2;
  #eventos = [];

  constructor() {
    this.id = 0;
  }

  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString
  ) {
    try {
      this.id++;

      const participantes = [];

      const evento = {
        id: this.id,
        nombre,
        lugar,
        precio,
        capacidad,
        fecha,
        participantes,
      };

      this.#eventos.push(evento);
      return `Evento creado con id: ${this.id}`;
    } catch {}
  }
}

const manejadorDeEventos = new TicketManager();

console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
