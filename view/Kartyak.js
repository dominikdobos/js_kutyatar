import Kartya from "./Kartya.js";

export default class Kartyak {
  #lista = [];
  #TAROLO_ELEM;
  constructor(lista, TAROLO_ELEM) {
    this.#lista = lista;
    this.#TAROLO_ELEM = TAROLO_ELEM;
    this.#TAROLO_ELEM.empty();
    this.kutyaKiir();
  }

  kutyaKiir() {
    this.#lista.forEach((elem) => {
      console.log(elem);
      new Kartya(elem, this.#TAROLO_ELEM);
    });
  }
}
