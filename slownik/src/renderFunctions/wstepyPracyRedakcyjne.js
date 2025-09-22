
function wstepyPraceRedakcyjne(work) {
    let html = `<strong>${work.autor || work.tytul|| ""}</strong>`;
    if (work.autor) html+=". ";
    if (work.tytul&&work.autor) html += ` ${work.tytul}`;

    if (work.podtytul) html += ` : ${work.podtytul}`;

    if (work.gatunek) html += ` [${work.gatunek}]`;
    if (work.odpowiedzialnosc) html += ` / ${work.odpowiedzialnosc}`;
    if (work.tom) html += `. ${work.tom}`;
    html+=".";

    if (work.mwydania) html += ` - ${work.mwydania}`;
    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;
    if (work.rok) html += `, ${work.rok}`;
    if (work.strony) html += `. - ${work.strony}`;
    if (work.seria) html += `. - (${work.seria})`;
    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
    if (work.nastepne_wydania) html += `<br/>${work.nastepne_wydania}`;

    if (work.dedykacja) html += `<br/><span style="padding-left:2em;">\tDedykacja: ${work.dedykacja}</span>`;
    if (work.zawartosc) html += `<br/><span style="padding-left:2em;">\tZawartość: ${work.zawartosc}</span>`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default wstepyPraceRedakcyjne;
