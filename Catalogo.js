export default class Catalogo { // cria a classe Catalogo 
    #listaDeMidias; // declara uma propriedade
    constructor() { // é um metodo especial  da classe
        this.#listaDeMidias = []; // this é um objeto atual
        // criar um array vazio
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
}