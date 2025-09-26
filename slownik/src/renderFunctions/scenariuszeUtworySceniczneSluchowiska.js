function scenariuszeUtworySceniczneSluchowiska(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;

    if (work.podtytul) html += ` : ${work.podtytul}`;
    if (work.gatunek) html += `  [${work.gatunek}]`;
    if (work.oznaczenie_odpowiedzialnosci) html += ` / ${work.oznaczenie_odpowiedzialnosci}`;


    if (work.tytul_czasopisma) html += ` // ${work.tytul_czasopisma}`;

    if (work.mwydania) html += `. - ${work.mwydania}`;
    if (work.instytucja_wystawiajaca) html += ` : ${work.instytucja_wystawiajaca}`;
    // html += `.`;
    // if (work.produkcja&&(work.instytucja_wystawiajaca||work.mwydania)) html += ".";
    if (work.produkcja) html += `. - ${work.produkcja}`;
    if (work.rok) html += `, ${work.rok}`;
    if (work.strony) html += `, ${work.strony}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default scenariuszeUtworySceniczneSluchowiska;
