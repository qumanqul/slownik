
function publikacjeWAntologiachIPracachZbiorowych(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;
    if (work.gatunek) html += ` [${work.gatunek}]`;
    if (work.podtytul) html += ` : ${work.podtytul}`;

    if (work.oznaczenie_odpowiedzialnosci) html += ` / ${work.oznaczenie_odpowiedzialnosci}`;
    if (work.tytul_antologii) html += ` // W: ${work.tytul_antologii}`;

    if (work.podtytul_antologii) html += ` : ${work.podtytul_antologii}`;
    if (work.opr) html += ` / ${work.opr}`;
    html += `.`;
    if (work.mwydania) html += ` - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;
    if (work.rok) html += `, ${work.rok}`;
    if (work.strony) html += `. - ${work.strony}`;
    if (work.dodatki) html += ` : ${work.dodatki}`;
    if (work.seria) html += `. - (${work.seria})`;
    if (work.nastepne_wydania) html += ` ${work.nastepne_wydania}`;

    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;
    if (work.hasla) html += `<br/>${work.hasla}`;

    return html
}

export default publikacjeWAntologiachIPracachZbiorowych;
