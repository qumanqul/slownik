
function wywiadyIWypowedzi(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;
    if (work.podtytul_wywiadu) html += ` : ${work.podtytul_wywiadu}`;

    if (work.gatunek) html += ` [${work.gatunek}]`;
    if (work.rozmawial) html += ` / ${work.rozmawial}`;
    if (work.uwagi_drobne) html += `. - ${work.uwagi_drobne}`;
    if (work.tytul_czasopisma) html += ` // ${work.tytul_czasopisma}`;
    if (work.tytul_ksiazki) html += ` // W: ${work.tytul_ksiazki}`;
    if (work.podtytul) html += ` : ${work.podtytul}`;
    if (work.odpowiedzialnosc) html += ` / ${work.odpowiedzialnosc}`;

    html += `.`;
    if (work.mwydania) html += ` - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;
    if (work.rok) html += ` - ${work.rok}`;
    if (work.nr) html += `, ${work.nr}`;
    if (work.tytul_dodatku) html += `, dod. ${work.tytul_dodatku}`;
    if (work.nr_dodatku) html += `, ${work.nr_dodatku}`;
    if (work.strony) html += `, ${work.strony}`;
    if (work.strony2) html += `. - ${work.strony2}`;
    if (work.dodatki) html += ` : ${work.dodatki}`;
    if (work.seria) html += `. - (${work.seria})`;
    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.nastepne_wydania) html += `<br/>${work.nastepne_wydania}`;

    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default wywiadyIWypowedzi;
