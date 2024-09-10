import { KUTYAK } from "./adatok.js";
import Kartyak from "./view/Kartyak.js";

const KIVALASZTOTTAK = [];

const TAROLO_ELEM = $(".tartalom");
const KIVALASZTOTT_ELEM = $(".kivalasztott");

new Kartyak(KUTYAK, TAROLO_ELEM);

// TEGYÜK BELE A KIVÁLASZTOTT KUTYA ADATAIT A 'KIVALASZTOTTAK' LISTÁBA

// a saját eseményre feliratkozunk amit a Kartya osztályba hoztunk létre
$(window).on("kivalaszt", (event) => {
  console.log(event.detail);
  KIVALASZTOTTAK.push(event.detail);
  new Kartyak(KIVALASZTOTTAK, KIVALASZTOTT_ELEM);
});
