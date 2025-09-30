import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Writers.css";
import full_json from "../data/wbpg_fixed.json";

const groupByLetter = (writers) => {
  const sorted = [...writers].sort((a, b) =>
    (a.nazwisko + " " + a.imie).localeCompare(b.nazwisko + " " + b.imie, "pl")
  );
  return sorted.reduce((acc, writer) => {
    const letter = writer.nazwisko[0]?.toUpperCase() || "#";
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(writer);
    return acc;
  }, {});
};

const cleanName = (str) =>
  String(str || "")
    .replace(/<br>/gi, "")
    .replace(/\(.*?\)/g, "")
    .replace(/\s+/g, " ")
    .trim();

export default function Writers() {
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    if (Array.isArray(full_json)) {
      const pisarzTable = full_json.find((t) => t.name === "pisarz");
      if (pisarzTable && Array.isArray(pisarzTable.data)) {
        const normalized = pisarzTable.data
          .filter((w) => (w.dostepny || "").toLowerCase() === "tak")
          .map((w) => ({
            id: w.id,
            imie: cleanName(w.imie),
            nazwisko: cleanName(w.nazwisko),
          }));
        setWriters(normalized);
      }
    }
  }, []);

  if (!writers || !writers.length) {
    return <main className="writers">Pisarza nie znalaziono</main>;
  }
  const grouped = groupByLetter(writers);

  return (
    <main className="writers">
      {Object.keys(grouped).map((letter) => (
        <div key={letter} className="writers-section">
          <h2 className="letter">{letter}</h2>
          <ul>
            {grouped[letter].map((writer) => (
              <li key={writer.id}>
                <Link to={`/writers/${writer.id}`}>
                  {writer.nazwisko} {writer.imie}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
