
function adaptacje(work) {
    let html = `<strong>${work.tytul || ""}</strong>`;
    if (work.podtytul) html += ` : ${work.podtytul}`;

    if (work.gatunek) html += ` [${work.gatunek}]`;
    if (work.odpowiedzialnosc) html += ` / ${work.odpowiedzialnosc}`;

    html += `.`;
    if (work.mwydania) html += ` - ${work.mwydania}`;

    if (work.uwagi) html += `<br/>${work.uwagi}`;
    if (work.hasla) html += `<br/>${work.hasla}`;

    return html
}


export default adaptacje;
