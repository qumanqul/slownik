import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/WriterDetail.css";
import full_json from "../data/wbpg_fixed.json"

const sortByYear = (works) => {
    if(works&&works.length&&works[0].rok)
        return works.sort((a, b) =>
            a.rok<b.rok
        );
}
export default function WriterDetail() {
  const { id } = useParams();
  const [writer, setWriter] = useState(full_json[8].data.find(a=>a.id===id));

  console.log(writer)
  // const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  // useEffect(() => {
  //   fetch("/pisarze_full.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const found = data.find((w) => w.id === parseInt(id));
  //       setWriter(found || null);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error to open JSON:", err);
  //       setLoading(false);
  //     });
  // }, [id]);

  useEffect(() => {
    if (!writer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0.1 }
    );

    Object.keys(sectionRefs.current).forEach((id) => {
      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]);
      }
    });

    return () => observer.disconnect();
  }, [writer]);



  if (!writer) {
    return (
      <main className="writer-detail">
        <p>Nie znaleziono pisarza</p>
        <Link to="/">← Powrót</Link>
      </main>
    );
  }

  const sidebarSections = {
    "Wydawnictwa zwarte": full_json[19].data.filter(a=>a.id_pisarza==id),
    "Scenariusze, utwory sceniczne, słuchowiska":
        full_json[15].data.filter(a=>a.id_pisarza==id),
    "Publikacje w antologiach i pracach zbiorowych":
        full_json[12].data.filter(a=>a.id_pisarza==id),
    "Publikacje w czasopismach": full_json[11].data.filter(a=>a.id_pisarza==id),
    Przekłady: full_json[10].data.filter(a=>a.id_pisarza==id),
    Adaptacje: full_json[2].data.filter(a=>a.id_pisarza==id),
    "Wstępy, prace redakcyjne": full_json[18].data.filter(a=>a.id_pisarza==id),
    "Wywiady i wypowiedzi": full_json[20].data.filter(a=>a.id_pisarza==id),
    "Bibliografie, słowniki, historie literatury":
        full_json[5].data.filter(a=>a.id_pisarza==id),
    "Opracowania ogólne": full_json[6].data.filter(a=>a.id_pisarza==id),
    "Pomniejsze materiały biograficzne":
        full_json[5].data.filter(a=>a.id_pisarza==id),
    "Opracowania poszczególnych utworów":
        full_json[7].data.filter(a=>a.id_pisarza==id),
    "Utwory poświęcone pisarzowi": full_json[16].data.filter(a=>a.id_pisarza==id),
    "Informacje inne": full_json[4].data.filter(a=>a.id_pisarza==id),
  };
  console.log(sidebarSections);
    Object.entries(sidebarSections).map(([category,items]) => {
       console.log(items);
    })
  return (
    <main className="writer-detail">
      <aside className="sidebar">
        <ul>
          {Object.entries(sidebarSections).map(([key, value]) =>
            value && value.length > 0 ? (
              <li key={key}>
                <a
                  href={`#${key.replace(/\s+/g, "-")}`}
                  className={
                    activeSection === key.replace(/\s+/g, "-") ? "active" : ""
                  }
                >
                  {key}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </aside>

        <section className="content">
            <h1 className="name">
                {writer.imie + " " + writer.nazwisko + " "}
                {(writer.birth_date || writer.death_date) && (
                    <span className="dates">
              ( {writer.birth_date ? `ur. ${writer.birth_date}` : ""}{" "}
                        {writer.death_date ? `– zm. ${writer.death_date}` : ""} )
            </span>
                )}
            </h1>

            {full_json[3].data.find(a => a.id_pisarza == id) &&
                <p style={{}}
                   dangerouslySetInnerHTML={{__html: full_json[3].data.find(a => a.id_pisarza == id).tekst}}></p>
            }
            <h1>Indeks Tytułów</h1>
            <br/>
            <br/>
            <h1>TWÓRCZOŚĆ</h1>
            <br/>

            {Object.entries(sidebarSections).map(([category, items]) =>
                items.length > 0 ? (
                    <div
                        key={category}
                        id={category.replace(/\s+/g, "-")}
                        ref={(el) =>
                            (sectionRefs.current[category.replace(/\s+/g, "-")] = el)
                        }
                    >
                        <h2>{category}</h2>
                        <br/><br/>
                        <ul>
                            {items
                                .sort((a, b) =>
                                    (a.tytul).localeCompare(b.tytul, "pl"))
                                .sort((a, b) => a.rok - b.rok)
                                .map((work, idx) => {
                                    // build a single HTML string
                                    let html = `<strong>${work.tytul || ""}</strong>`;
                                    if (work.podtytul) html += ` : ${work.podtytul}`;
                                    if (work.gatunek) html += ` [${work.gatunek}]`;
                                    if (work.strefa_odpow) html += ` / ${work.strefa_odpow}`;
                                    html += `.`;
                                    if (work.mwydania) html += ` - ${work.mwydania}`;
                                    if (work.wydawnictwo) html += `  : ${work.wydawnictwo}`;
                                    if (work.mwydania2) html += ` ;; ${work.mwydania2}`;
                                    if (work.wydawnictwo2) html += `  : ${work.wydawnictwo2}`;
                                    if (work.rok) html += `, ${work.rok}`;
                                    if (work.strony) html += `. - ${work.strony}`;
                                    if (work.dodatki) html += ` : ${work.dodatki}`;
                                    if (work.format) html += ` ;; ${work.format}`;
                                    if (work.seria) html += `. - (${work.seria})`;

                                    if (work.isbn) html += `<br/>ISBN ${work.isbn}`;
                                    if (work.dedykacja) html += `<br/><span style="padding-left:2em;">\tDedykacja: ${work.dedykacja}</span>`;
                                    if (work.zawartosc) html += `<br/><span style="padding-left:2em;">\tZawartość: ${work.zawartosc}</span>`;
                                    if (work.uwagi) html += `<br/>${work.uwagi}`;
                                    if (work.hasla) html += `<br/>${work.hasla}`;

                                    return (
                                        <li key={idx} dangerouslySetInnerHTML={{__html: html}}>
                                        </li>
                                    );
                                })}

                        </ul>
                    </div>
                ) : null
            )}
            {/*{*/}
            {/*    Object.entries(sidebarSections).map(([category,items]) => {*/}
            {/*        (<p key={category}>{category}</p>)*/}
            {/*    })*/}
            {/*}*/}
        </section>
    </main>
  );
}
