import "../styles/List.css";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import "../styles/Admin.css";

export default function List({
  section,
  page,
  setPage,
  setAction,
  setEditIndex,
  data,
  handleDelete,
}) {


  
  const [currentData, setCurrentData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const pageSize = 20;



  useEffect(() => {
    if (!section) return;

    const listData = data[section.id]?.data || [];

    const filteredData = listData.filter((item) =>
      Object.values(item).some((value) =>
        value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );

    const totalPages = Math.ceil(filteredData.length / pageSize);
    setNumOfPages(totalPages);

    const currentPage = Math.min(Math.max(page, 1), totalPages || 1);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setCurrentData(filteredData.slice(start, end));
  }, [section, page, data, searchTerm]);



  if (!currentData || currentData.length === 0) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search…"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="search-input"
        />
        <p>No data available</p>
      </div>
    );
  }



  const headers = Object.keys(currentData[0]);



  function highlightMatch(text, term) {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    const parts = text?.toString().split(regex);
    return parts.map((part, i) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <mark key={i}>{part}</mark>
      ) : (
        part
      )
    );
  }

  return (
    <div>
      <div className="list-header">
        <button className="Add-button" onClick={() => setAction("add")}>
          Add
        </button>
        <input
          type="text"
          placeholder="Search…"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          className="search-input"
        />
      </div>

      <table>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={`tr-${index}`}>
              <td className="info">
                {headers.map((header) => (
                  <p key={`${index}-${header}`}>
                    <strong>{header}:</strong>{" "}
                    {highlightMatch(item[header] || "—", searchTerm)}
                  </p>
                ))}
              </td>
              <td>
                <div className="Table-buttons">
                  <button
                    className="Edit-button"
                    onClick={() => {
                      setEditIndex((page - 1) * pageSize + index);
                      setAction("edit");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="Delete-button"
                    onClick={() =>
                      handleDelete((page - 1) * pageSize + index)
                    }
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination numOfPages={numOfPages} page={page} setPage={setPage} />
    </div>
  );
}
