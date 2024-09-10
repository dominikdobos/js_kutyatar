export default class Kartya {
  //adattagok (# = privát)
  #obj = {};
  #szuloElem;
  //konstruktor
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kutyaKiir();
    // gomb elem a Kartya saját adattagja lesz
    this.gombElem = $(".kivalaszt:last");
    console.log(this.gombElem);
    this.esemenyKezelo();
  }

  //tagfüggvény
  kutyaKiir() {
    let txt = `
      <div class="card col-md m-2 p-3">
          <h4>${this.#obj.nev}</h4>
          <p>${this.#obj.kor}</p>
          <p>${this.#obj.nem}</p>
          <button type="button" class="btn btn-secondary kivalaszt">Kiválaszt</button>
      </div>
      `;
    this.#szuloElem.append(txt);
  }

  // névtelen függvény esetében a 'this' azt a HTML DOM elemet jelenti, amelyik az eseményt kiváltotta
  // nyíl fgv esetén a 'this' arra az osztály példányra mutat, amelyik az adott nyíl fgvt körbefogja

  esemenyKezelo() {
    this.gombElem.on("click", () => {
      console.log(this);
      // létrehozunk egy saját eseményt
      // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
      const e = new CustomEvent("kivalaszt", {
        detail: this.#obj,
      });
      window.dispatchEvent(e);
    });
  }
}
