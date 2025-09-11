import React, {useState, useEffect, useContext, use} from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

const Main = () => {

    return(
        <main className="main">
            <h2 className="subtitle">Biobibliograficzny Słownik Pisarzy Pomorza Gdańskiego</h2>
            <h1 className="title">Wyszukaj Pisarze</h1>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Wyszukaj..."/>
            </div>
            <div className="description">
                <p>
                    Tworzona przez Wojewódzką i Miejską Bibliotekę Publiczną w Gdańsku  baza internetowa Biobibliograficzny Słownik Pisarzy Pomorza Gdańskiego  stanowi najobszerniejsze usystematyzowane źródło informacji  biobibliograficznych o pisarzach naszego regionu, publikujących po 1945  r. Słownik powstał w 2003 r. w Bibliotecznym Ośrodku Informacji WiMBP  jako kontynuacja wcześniejszych przedsięwzięć biblioteki dokumentujących i propagujących dorobek pomorskiego środowiska pisarskiego.
Podstawowym elementem w strukturze Słownika – podobnie jak w  słownikach tradycyjnych – jest hasło osobowe (pisarz). Otwiera się ono w całości po kliknięciu w nazwisko pisarza na liście.
Każde hasło składa się z dwóch głównych części: biogramu – czyli  informacji o życiu pisarza, ze szczególnym uwzględnieniem działalności  literackiej (niektóre biogramy opracowano w oparciu o ankiety autorskie) – oraz bibliografii rejestrującej wszystko, co autor opublikował i co  opublikowano o nim i jego twórczości. Poniżej biogramu znajduje się  wykaz najważniejszych źródeł pomocnych w opracowaniu hasła.
Bibliografia została podzielona na 14 poddziałów (pasek po lewej  stronie). W części podmiotowej bibliografii (twórczość) rejestrujemy nie tylko wydane książki, ale również teksty opublikowane w czasopismach,  antologiach, pracach zbiorowych, a także sztuki teatralne, słuchowiska,  scenariusze, piosenki itp. Oprócz utworów należących do tzw. literatury  pięknej uwzględniamy (czasem w wyborze) eseje, reportaże, wspomnienia,  felietony, recenzje, rozprawy, artykuły publicystyczne, tłumaczenia i  prace redakcyjne, a także wywiady i wypowiedzi pisarza.
Bibliografia przedmiotowa, a więc piśmiennictwo traktujące o  twórczości i życiu pisarza, znajduje się w poddziałach: „Bibliografie,  słowniki, historie literatury”; „Opracowania ogólne”; „Opracowania  poszczególnych utworów”; „Pomniejsze materiały biograficzne” (tu m.in.  noty o nagrodach i spotkaniach autorskich). W Słowniku można też znaleźć wykaz utworów dedykowanych pisarzowi.
Przy niektórych hasłach zamieściliśmy wybrane fragmenty recenzji i  opracowań charakteryzujące twórczość pisarza – ostatni poddział:  „Informacje inne”.
                </p>
            </div>
        </main>
    )
}

export default Main;