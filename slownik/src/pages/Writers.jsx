import "../styles/Writers.css";

const writers = [
  "Abramowicz Mieczysław",
  "Adamkowicz Adam",
  "Afanasjew Alina",
  "Afanasjew Jerzy",
  "Baran Wojciech",
  "Bednarek Anna",
  "Bielski Krzysztof",
  "Błaszczyk Natalia",
  "Borowski Damian",
  "Chmielewski Zofia",
  "Cieślak Michał",
  "Czajkowski Patrycja",
  "Cybulski Jan",
  "Dąbrowski Kamil",
  "Domański Julia",
  "Drzewiecki Piotr",
  "Dudziak Monika",
  "Edwardowski Katarzyna",
  "Eugeniusz Rafał",
  "Ewicz Alicja",
  "Ertman Szymon",
  "Fabiański Oskar",
  "Fedorowicz Barbara",
  "Filipek Łukasz",
  "Frączek Weronika",
  "Gajewski Dominik",
  "Głowacki Agnieszka",
  "Górski Adrian",
  "Hajduk Ewelina",
  "Haller Mateusz",
  "Hołowacz Sebastian",
  "Ilnicki Kinga",
  "Iwaszkiewicz Bartosz",
  "Izdebski Marek"
];

// Группировка по первой букве
const groupByLetter = (names) => {
  const sorted = [...names].sort((a, b) => a.localeCompare(b, "pl"));
  return sorted.reduce((acc, name) => {
    const letter = name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(name);
    return acc;
  }, {});
};

export default function Writers() {
  const grouped = groupByLetter(writers);

  return (
    <main className="writers">
      {Object.keys(grouped).map((letter) => (
        <div key={letter} className="writers-section">
          <h2 className="letter">{letter}</h2>
          <ul>
            {grouped[letter].map((writer) => (
              <li key={writer}>- {writer}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
