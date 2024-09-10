import { KUTYAK } from "./adatok.js";
import { kutyaKiir } from "./fv.js";

import Kartyak from "./Kartyak.js";

// kutyák adatai megjelenítenénk a tartalmon divben külön, egymás mellett az egyes kutyák adatait

// hozzunk létre változókat
const cim = "Minden, amit a kutyáról tudni kell!";

const CIM_ELEM = $("header");
console.log(CIM_ELEM);
CIM_ELEM.append(`<h1>${cim}</h1>`);

const TAROLO_ELEM = $(".tartalom");

/*KUTYAK.forEach((elem) => {
  console.log(elem);
  new Kartya(elem, TAROLO_ELEM);
}); */
new Kartyak(KUTYAK, TAROLO_ELEM);
