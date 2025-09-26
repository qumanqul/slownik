function bibliografieSlownikiHistorieLiteratury(work) {
    let html = `<strong>${work.autor || work.tytul|| ""}</strong>`;
    if (work.autor) html+=". ";
    if (work.tytul&&work.autor) html += ` ${work.tytul}`;
    if (work.podtytul) html += ` : ${work.podtytul}`;
    if (work.gatunek) html += `  [${work.gatunek}]`;
    // if (work.oznaczenie_odpowiedzialnosci) html += ` / ${work.oznaczenie_odpowiedzialnosci}`;

    if (work.autor_slownika||work.tytul_slownika) html+= " // W:";
    if (work.autor_slownika) html += ` ${work.autor_slownika}`;
    if (work.wspolautor_slownika) html += `, ${work.wspolautor_slownika}`;
    if (work.autor_slownika||work.wspolautor_slownika) html+= ".";

    if (work.tytul_slownika) html += ` ${work.tytul_slownika}`;

    if (work.odpowiedzialnosc) html += ` / ${work.odpowiedzialnosc}`;
    if (work.tom) html += `. ${work.tom}`;

    if (work.mwydania) html += `. - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;

    // html += `.`;
    // if (work.produkcja&&(work.instytucja_wystawiajaca||work.mwydania)) html += ".";
    if (work.produkcja) html += `. - ${work.produkcja}`;
    if (work.rok) html += `, ${work.rok}`;
    if (work.strony) html += `. - ${work.strony}`;
    if (work.tytul_artykulu) html += `: ${work.tytul_artykulu}`;
    if (work.dodatki) html += ` : ${work.dodatki}`;
    if (work.seria) html += `. - (${work.seria})`;
    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.nastepne_wydania) html += `<br/>${work.nastepne_wydania}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default bibliografieSlownikiHistorieLiteratury;
