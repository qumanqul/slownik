
function utworyPosweconePisazowi(work) {
    let html = `<strong>${work.autor || ""}</strong>`;
    if (work.opis_pelny) html += `${work.opis_pelny}`;
    if (work.uwagi) html += `${work.uwagi}`;

    return html
}

export default utworyPosweconePisazowi;
