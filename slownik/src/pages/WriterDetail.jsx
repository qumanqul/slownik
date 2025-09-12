import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import "../styles/WriterDetail.css";

export default function WriterDetail() {
  const { id } = useParams();
  const [writer, setWriter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    fetch("/pisarze_full.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((w) => w.id === parseInt(id));
        setWriter(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error to open JSON:", err);
        setLoading(false);
      });
  }, [id]);

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

  if (loading) {
    return <main className="writer-detail">Ładowanie...</main>;
  }

  if (!writer) {
    return (
      <main className="writer-detail">
        <p>Nie znaleziono pisarza</p>
        <Link to="/">← Powrót</Link>
      </main>
    );
  }

  const sidebarSections = {
    "Wydawnictwa zwarte": writer.works["Wydawnictwa zwarte"],
    "Scenariusze, utwory sceniczne, słuchowiska":
      writer.works["Scenariusze, utwory sceniczne, słuchowiska"],
    "Publikacje w antologiach i pracach zbiorowych":
      writer.works["Publikacje w antologiach i pracach zbiorowych"],
    "Publikacje w czasopismach": writer.works["Publikacje w czasopismach"],
    Przekłady: writer.works["Przekłady"],
    Adaptacje: writer.works["Adaptacje"],
    "Wstępy, prace redakcyjne": writer.works["Wstępy, prace redakcyjne"],
    "Wywiady i wypowiedzi": writer.works["Wywiady i wypowiedzi"],
    "Bibliografie, słowniki, historie literatury":
      writer.works["Bibliografie, słowniki, historie literatury"],
    "Opracowania ogólne": writer.works["Opracowania ogólne"],
    "Pomniejsze materiały biograficzne":
      writer.works["Pomniejsze materiały biograficzne"],
    "Opracowania poszczególnych utworów":
      writer.works["Opracowania poszczególnych utworów"],
    "Utwory poświęcone pisarzowi": writer["Utwory poświęcone pisarzowi"],
    "Informacje inne": writer["Informacje inne"],
  };

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
          {writer.name}{" "}
          {(writer.birth_date || writer.death_date) && (
            <span className="dates">
              ( {writer.birth_date ? `ur. ${writer.birth_date}` : ""}{" "}
              {writer.death_date ? `– zm. ${writer.death_date}` : ""} )
            </span>
          )}
        </h1>

        {writer.biography && <p>{writer.biography}</p>}

        {Object.entries(writer.works).map(([category, items]) =>
          items.length > 0 ? (
            <div
              key={category}
              id={category.replace(/\s+/g, "-")}
              ref={(el) =>
                (sectionRefs.current[category.replace(/\s+/g, "-")] = el)
              }
            >
              <h2>{category}</h2>
              <ul>
                {items.map((work, idx) => (
                  <li key={idx}>{work}</li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </section>
    </main>
  );
}
