export class EntregasRepository {
    constructor(database){
        this.database;
    }

    async listarTodos() {
        return this.usuarios;
  }

    async buscarPorId(id) {
        return this.database.find((u) => u.id === id) ?? null;
  }

    async criar(dados) {
        const novo = { id: this.proximoId++, ...dados };
        this.database.push(novo);
        return novo;
  }

    async atualizar(id, dados) {
    const i = this.database.findIndex((u) => u.id === id);
    if (i === -1) return null;
    this.database[i] = { ...this.database[i], ...dados, id };
    return this.database[i];
    }
}
