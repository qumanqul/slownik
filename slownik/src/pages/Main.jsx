import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";

const Main = () => {
  const [query, setQuery] = useState("");
  const [writers, setWriters] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/pisarze_full.json")
      .then((res) => res.json())
      .then((data) => setWriters(data))
      .catch((err) => console.error("Błąd ładowania JSON:", err));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const lower = query.toLowerCase();
    const results = writers
      .filter((w) => w.name.toLowerCase().includes(lower))
      .slice(0, 3);

    setSuggestions(results);
  }, [query, writers]);

  return (
    <main className="main">
      <h2 className="subtitle">
        Biobibliograficzny Słownik Pisarzy Pomorza Gdańskiego
      </h2>
      <h1 className="title">Wyszukaj Pisarze</h1>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Wyszukaj..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((writer) => (
              <li key={writer.id}>
                <Link to={`/writers/${writer.id}`}>{writer.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="description">
        <p>
          Tworzona przez Wojewódzką i Miejską Bibliotekę Publiczną w Gdańsku
          baza internetowa Biobibliograficzny Słownik Pisarzy Pomorza Gdańskiego
          stanowi najobszerniejsze usystematyzowane źródło informacji
          biobibliograficznych o pisarzach naszego regionu, publikujących po
          1945 r. Słownik powstał w 2003 r. w Bibliotecznym Ośrodku Informacji
          WiMBP jako kontynuacja wcześniejszych przedsięwzięć biblioteki
          dokumentujących i propagujących dorobek pomorskiego środowiska
          pisarskiego.
        </p>
        <p>
          Podstawowym elementem w strukturze Słownika – podobnie jak w
          słownikach tradycyjnych – jest hasło osobowe (pisarz). Otwiera się ono
          w całości po kliknięciu w nazwisko pisarza na liście. Każde hasło
          składa się z dwóch głównych części: biogramu – czyli informacji o
          życiu pisarza, ze szczególnym uwzględnieniem działalności literackiej
          (niektóre biogramy opracowano w oparciu o ankiety autorskie) – oraz
          bibliografii rejestrującej wszystko, co autor opublikował i co
          opublikowano o nim i jego twórczości.
        </p>
        <p>
          Bibliografia została podzielona na 14 poddziałów (pasek po lewej
          stronie). W części podmiotowej bibliografii (twórczość) rejestrujemy
          nie tylko wydane książki, ale również teksty opublikowane w
          czasopismach, antologiach, pracach zbiorowych, a także sztuki
          teatralne, słuchowiska, scenariusze, piosenki itp.
        </p>
        <p>
          Bibliografia przedmiotowa, a więc piśmiennictwo traktujące o
          twórczości i życiu pisarza, znajduje się w poddziałach: „Bibliografie,
          słowniki, historie literatury”; „Opracowania ogólne”; „Opracowania
          poszczególnych utworów”; „Pomniejsze materiały biograficzne”.
        </p>
      </div>
    </main>
  );
};

export default Main;
