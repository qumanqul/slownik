
function opracowaniaOgolne(work) {
    let html = `<strong>${work.autor || ""}</strong>`;
    if (work.opis_pelny) html += `${work.opis_pelny}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;

    return html
}

export default opracowaniaOgolne;
