export default class Catalogo {
    #listaDeMidias;
    constructor() {
        this.#listaDeMidias = [];
    }
    adicionar(midia) {
        this.#listaDeMidias.push(midia);
        this.renderizar();
    }
}