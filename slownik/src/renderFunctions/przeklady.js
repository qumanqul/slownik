function przeklady(work) {
    let html = `<strong>${work.autor || ""}</strong>`;

    if (work.tytul) html += `:  ${work.tytul}`;
    if (work.podtytul) html += `:  ${work.podtytul}`;
    if (work.gatunek) html += `  [${work.gatunek}]`;
    if (work.tytul_antologii) html += ` // W: ${work.tytul_antologii}`;
    if (work.podtytul_antologii) html += ` : ${work.podtytul_antologii}`;
    if (work.autor_przekladu) html += ` / ${work.autor_przekladu}`;
    if (work.odpowiedzialnosc) html += `/ ${work.odpowiedzialnosc}`;
    if (work.tytul_czasopisma) html += ` // ${work.tytul_czasopisma}`;
    html += `.`;
    if (work.tom_rocznik) html += `- ${work.tom_rocznik}`;

    if (work.mwydania) html += `  - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.zeszyt_rocznik&&work.rok) html += ` - ${work.zeszyt_rocznik} (${work.rok})`;
    if (!work.zeszyt_rocznik&&work.rok) html += `, ${work.rok}`;
    if (work.numer) html += `, ${work.numer}`;
    if (work.tytul_dodatku) html += `, dod. ${work.tytul_dodatku}`;
    if (work.numer_dodatku) html += `, ${work.numer_dodatku}`;
    if (work.nr) html += `, ${work.nr},`;
    if (work.strony) html += `. - ${work.strony}`;
    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default przeklady;
