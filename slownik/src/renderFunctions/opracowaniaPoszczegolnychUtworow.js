
function opracowaniaPoszczegolnychUtworow(work) {
    let html = `<strong>${work.tytul_utworu || ""}</strong>`;
    if (work.autor) html += `<br/>${work.autor}`;
    if (work.opis_pelny) html += `${work.opis_pelny}`;
    if (work.uwagi) html += `<br/>${work.uwagi}`;
    return html
}

export default opracowaniaPoszczegolnychUtworow;
