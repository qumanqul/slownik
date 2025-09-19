function publikacjeWCzasopismach(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;

    if (work.podtytul) html += `:  ${work.podtytul}`;
    if (work.gatunek) html += `:  [${work.gatunek}]`;
    if (work.odpowiedzialnosc) html += `/ ${work.odpowiedzialnosc}`;
    if (work.cykl) html += `. - ${work.cykl}`;

    if (work.tytul_czasopisma) html += ` // ${work.tytul_czasopisma}`;
    html += `.`;
    if (work.tom_rocznik) html += `- ${work.tom_rocznik}`;

    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
    if (work.uwagi_drobne) html += ` - ${work.uwagi_drobne}.`;
    if (work.rok) html += ` - ${work.rok}`;
    if (work.numer) html += `, ${work.numer}`;
    if (work.tytul_dod_czasopisma) html += `, dod. ${work.tytul_dod_czasopisma}`;
    if (work.nr_dodatku) html += `, ${work.nr_dodatku}`;
    if (work.strony) html += `, ${work.strony}`;
    if (work.dedykacja) html += `<br/><span style="padding-left:2em;">\tDedykacja: ${work.dedykacja}</span>`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;
    if (work.hasla) html += `<br/>${work.hasla}`;

    return html
}

export default publikacjeWCzasopismach;
