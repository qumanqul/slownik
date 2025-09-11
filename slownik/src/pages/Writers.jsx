import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Writers.css";

const groupByLetter = (writers) => {
  const sorted = [...writers].sort((a, b) =>
    a.name.localeCompare(b.name, "pl")
  );
  return sorted.reduce((acc, writer) => {
    const letter = writer.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(writer);
    return acc;
  }, {});
};

export default function Writers() {
  const [writers, setWriters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/pisarze_full.json")
      .then((res) => res.json())
      .then((data) => {
        setWriters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <main className="writers">Ładowanie...</main>;
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
                <Link to={`/writers/${writer.id}`}>- {writer.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
