export function kutyaKiir(kutya) {
  const TAROLO_ELEM = $(".tartalom");
  let txt = `
    <div class="card col-md m-2 p-3">
        <h4>${kutya.nev}</h4>
        <p>${kutya.kor}</p>
      <p>${kutya.nem}</p>
    </div>
    `;
  TAROLO_ELEM.append(txt);
}
