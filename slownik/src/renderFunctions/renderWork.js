import renderCzasopisma from "./renderCzasopisma.js";
import renderZwarte from "./renderZwarte.js";
import renderAntologia from "./renderAntologia.js";
import renderScenariusze from "./renderScenariusze.js";
import renderPrzeklady from "./renderPrzeklady.js";

function renderWork(work,category) {
    if(category==="Publikacje w czasopismach")return renderCzasopisma(work)
    if(category==="Wydawnictwa zwarte")return renderZwarte(work)
    if(category==="Publikacje w antologiach i pracach zbiorowych")return renderAntologia(work)
    if(category==="Scenariusze, utwory sceniczne, słuchowiska")return renderScenariusze(work)
    if(category==="Przekłady")return renderPrzeklady(work)


    return ""
}

export default renderWork;
