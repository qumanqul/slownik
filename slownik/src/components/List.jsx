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
  handleDelete
}) {



  const [currentData, setCurrentData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(1);
  const pageSize = 20;



  useEffect(() => {
    if (!section) return;

    const listData = data[section.id]?.data || [];
    const totalPages = Math.ceil(listData.length / pageSize);
    setNumOfPages(totalPages);

    const currentPage = Math.min(Math.max(page, 1), totalPages);
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setCurrentData(listData.slice(start, end));
  }, [section, page, data]);



  if (!currentData || currentData.length === 0) {
    return <p>No data available</p>;
  }



  const headers = Object.keys(currentData[0]);

  

  return (
    <div>
      <button className="Add-button" onClick={() => setAction("add")}>
        Add
      </button>
      <table>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={`tr-${index}`}>
              <td className="info">
                {headers.map((header) => (
                  <p key={`${index}-${header}`}>
                    <strong>{header}:</strong> {item[header] || "—"}
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
