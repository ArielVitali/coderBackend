class TicketManager {
  #precioBaseDeGanancia = 0.2;
  #eventos = [];

  constructor() {
    this.id = 0;
  }

  verEventos() {
    return this.#eventos;
  }

  agregarEvento(
    nombre,
    lugar,
    precio,
    capacidad = 50,
    fecha = new Date().toLocaleDateString()
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
  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#eventos.filter((evento) => evento.id === idEvento);
    if (evento.length == 0) {
      return `No hay eventos con el id ${idEvento}`;
    }

    console.log(evento[0]);
  }
}

const manejadorDeEventos = new TicketManager();

console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
console.log(manejadorDeEventos.agregarEvento("ariel", "casa"));
console.log(manejadorDeEventos.agregarUsuario("ariel", "casa"));

co;
