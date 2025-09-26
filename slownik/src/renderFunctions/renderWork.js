import publikacjeWCzasopismach from "./publikacjeWCzasopismach.js";
import wydawnictwaZwarte from "./wydawnictwaZwarte.js";
import publikacjeWAntologiachIPracachZbiorowych from "./publikacjeWAntologiachIPracachZbiorowych.js";
import scenariuszeUtworySceniczneSluchowiska from "./scenariuszeUtworySceniczneSluchowiska.js";
import przeklady from "./przeklady.js";
import adaptacje from "./adaptacje.js";
import wywiadyIWypowedzi from "./wywiadyIWypowedzi.js";
import bibliografieSlownikiHistorieLiteratury from "./bibliografieSlownikiHistorieLiteratury.js";
import opracowaniaOgolne from "./opracowaniaOgolne.js";
import pomniejszeMaterialyBiograficzne from "./pomniejszeMaterialyBiograficzne.js";
import opracowaniaPoszczegolnychUtworow from "./opracowaniaPoszczegolnychUtworow.js";
import utworyPosweconePisazowi from "./utworyPosweconePisazowi.js";
import wstepyPraceRedakcyjne from "./wstepyPracyRedakcyjne.js";

function renderWork(work,category) {
    if(category==="Wydawnictwa zwarte")return wydawnictwaZwarte(work)
    if(category==="Publikacje w czasopismach")return publikacjeWCzasopismach(work)
    if(category==="Publikacje w antologiach i pracach zbiorowych")return publikacjeWAntologiachIPracachZbiorowych(work)
    if(category==="Scenariusze, utwory sceniczne, słuchowiska")return scenariuszeUtworySceniczneSluchowiska(work)
    if(category==="Przekłady")return przeklady(work)
    if(category==="Wstępy, prace redakcyjne")return wstepyPraceRedakcyjne(work)
    if(category==="Adaptacje")return adaptacje(work)
    if(category==="Wywiady i wypowiedzi")return wywiadyIWypowedzi(work)
    if(category==="Bibliografie, słowniki, historie literatury")return bibliografieSlownikiHistorieLiteratury(work)
    if(category==="Opracowania ogólne")return opracowaniaOgolne(work)
    if(category==="Pomniejsze materiały biograficzne")return pomniejszeMaterialyBiograficzne(work)
    if(category==="Opracowania poszczególnych utworów")return opracowaniaPoszczegolnychUtworow(work)
    if(category==="Utwory poświęcone pisarzowi")return utworyPosweconePisazowi(work)
    if(category==="Informacje inne")return(work.tekst)
    
    if(category==="Wstep"||category==="Biogram")return(work.tekst)

    return ""
}

export default renderWork;
