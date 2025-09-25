import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/WriterDetail.css";
import full_json from "../data/wbpg_fixed.json";
import renderWork from "../renderFunctions/renderWork.js";

export default function WriterDetail() {
  const { id } = useParams();
  const [writer, setWriter] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  const normalizeId = (str) =>
    str
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
      .toLowerCase();

  useEffect(() => {
    if (!full_json || !Array.isArray(full_json)) return;
    const pisarzTable = full_json[8]; // таблица писателей
    if (!pisarzTable || !pisarzTable.data) return;
    const foundWriter = pisarzTable.data.find((w) => w.id === id);
    setWriter(foundWriter || null);
  }, [id]);

  useEffect(() => {
    if (!writer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -50% 0px", threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
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

  const sidebarSections = [
    {
      nazwa: "Wydawnictwa zwarte",
      data: full_json[19].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Scenariusze, utwory sceniczne, słuchowiska",
      data: full_json[13].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Publikacje w antologiach i pracach zbiorowych",
      data: full_json[12].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Publikacje w czasopismach",
      data: full_json[11].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Przekłady",
      data: full_json[10].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Adaptacje",
      data: full_json[2].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Wstępy, prace redakcyjne",
      data: full_json[18].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Wywiady i wypowiedzi",
      data: full_json[20].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Bibliografie, słowniki, historie literatury",
      data: full_json[14].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Opracowania ogólne",
      data: full_json[6].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Pomniejsze materiały biograficzne",
      data: full_json[5].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Opracowania poszczególnych utworów",
      data: full_json[7].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Utwory poświęcone pisarzowi",
      data: full_json[16].data.filter((a) => a.id_pisarza == id),
    },
    {
      nazwa: "Informacje inne",
      data: full_json[4].data.filter((a) => a.id_pisarza == id),
    },
  ];

  const cleanText = (str) =>
    String(str || "")
      .replace(/<br>/gi, "")
      .trim();

  return (
    <main className="writer-detail">
      <aside className="sidebar">
        <ul>
          {sidebarSections.map((array) =>
            array.data && array.data.length > 0 ? (
              <li key={array.nazwa}>
                <a
                  href={`#${normalizeId(array.nazwa)}`}
                  className={
                    activeSection === normalizeId(array.nazwa) ? "active" : ""
                  }
                >
                  {array.nazwa}
                </a>
              </li>
            ) : null
          )}
        </ul>
      </aside>

      <section className="content">
        <h1 className="name">
          {cleanText(writer.imie + " " + writer.nazwisko)}
          {(writer.birth_date || writer.death_date) && (
            <span className="dates">
              ( {writer.birth_date ? `ur. ${writer.birth_date}` : ""}{" "}
              {writer.death_date ? `– zm. ${writer.death_date}` : ""} )
            </span>
          )}
        </h1>

        {full_json[3].data.find((a) => a.id_pisarza == id) && (
          <p
            dangerouslySetInnerHTML={{
              __html: full_json[3].data.find((a) => a.id_pisarza == id).tekst,
            }}
          ></p>
        )}

        {sidebarSections.map((array) =>
          array.data.length > 0 ? (
            <div
              key={array.nazwa}
              id={normalizeId(array.nazwa)}
              ref={(el) => (sectionRefs.current[normalizeId(array.nazwa)] = el)}
            >
              <h2>{array.nazwa}</h2>
              <br />
              <br />
              <ol>
                {array.data
                  .sort((a, b) =>
                    (a.tytul || "").localeCompare(b.tytul || "", "pl")
                  )
                  .sort((a, b) => a.rok - b.rok)
                  .sort((a, b) =>
                    (a.tytul_utworu || "").localeCompare(
                      b.tytul_utworu || "",
                      "pl"
                    )
                  )
                  .map((work, idx) => (
                    <li
                      key={idx}
                      dangerouslySetInnerHTML={{
                        __html: renderWork(work, array.nazwa),
                      }}
                    />
                  ))}
              </ol>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}
