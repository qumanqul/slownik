
function renderZwarte(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;
    if (work.podtytul) html += ` : ${work.podtytul}`;

    if (work.gatunek) html += ` [${work.gatunek}]`;

    if (work.strefa_odpow) html += ` / ${work.strefa_odpow}`;
    html += `.`;
    if (work.mwydania) html += ` - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;
    if (work.rok) html += `, ${work.rok}`;
    if (work.strony) html += `. - ${work.strony}`;
    if (work.dodatki) html += ` : ${work.dodatki}`;
    if (work.format) html += ` ;; ${work.format}`;
    if (work.seria) html += `. - (${work.seria})`;
    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.nastepne_wydania) html += `<br/>${work.nastepne_wydania}`;

    if (work.dedykacja) html += `<br/><span style="padding-left:2em;">\tDedykacja: ${work.dedykacja}</span>`;
    if (work.zawartosc) html += `<br/><span style="padding-left:2em;">\tZawartość: ${work.zawartosc}</span>`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;
    if (work.hasla) html += `<br/>${work.hasla}`;

    return html
}

export default renderZwarte;
