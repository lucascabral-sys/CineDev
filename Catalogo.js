export default class Catalogo {
    #listaDeMidias;
    constructor() {
        this.#listaDeMidias = [];
    }
    adicionar(midia) {
        this.#listaDeMidias.push(midia);
        this.renderizar();
    }
    renderizar() {
        const container = document.getElementById("containerCatalogo")
        container.innerHTML = "";
        this.#listaDeMidias.forEach(midia => {
        container.innerHTML += midia.obterDadosHTML();
        });
    }
    xport default class Catalogo {
        static filtrarPorGenero(catalogoInstanciado, generoAlvo) {
        return catalogoInstanciado.#listaDeMidias.filter(
        m => m.genero.toLowerCase() === generoAlvo.toLowerCase()
    }
}
