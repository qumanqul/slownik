import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Writers.css";
import full_json from "../data/wbpg_fixed.json"
const groupByLetter = (writers) => {
  const sorted = [...writers].sort((a, b) =>
      (a.nazwisko+" "+a.imie).localeCompare(b.nazwisko+" "+b.imie, "pl")
  );
  return sorted.reduce((acc, writer) => {
    const letter = writer.nazwisko[0].toUpperCase("pl");
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(writer);
    return acc;
  }, {});
};
function moveParenthesesToEnd(str) {
  return (str.replace(/\((.*?)\)/g, '') + str.match(/\((.*?)\)/g)?.join('') || '').replace("undefined","").replace("<br>","");
}

// Przykład użycia:
export default function Writers() {
  const [writers, setWriters] = useState(full_json[8].data);
  // const [loading, setLoading] = useState(true);
  console.log(full_json)
  useEffect(() => {
    console.log(writers)
  }, []);
  // useEffect(() => {
  //   fetch("/pisarze_full.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWriters(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Ошибка загрузки JSON:", err);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return <main className="writers">Ładowanie...</main>;
  // }
  if (!writers||!writers.length) {
    return <main className="writers">Pisarze nie znalazone</main>;
  }
  const grouped = groupByLetter(writers);
  console.log(grouped);

  return (
    <main className="writers">
      {Object.keys(grouped).map((letter) => (
        <div key={letter} className="writers-section">
          <h2 className="letter">{letter}</h2>
          <ul>
            {grouped[letter].map((writer) => (
              <li key={writer.id}>
                <Link to={`/writers/${writer.id}`}>- {moveParenthesesToEnd(writer.nazwisko+" "+writer.imie)}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
