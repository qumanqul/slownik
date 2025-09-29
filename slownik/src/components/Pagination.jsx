import { useState } from "react";
import "../styles/Admin.css";

export default function Pagination({ numOfPages, page, setPage }) {
    const [inputPage, setInputPage] = useState("");

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < numOfPages) setPage(page + 1);
    };

    const handleGoToPage = (e) => {
        e.preventDefault();
        const targetPage = Number(inputPage);
        if (
        !isNaN(targetPage) &&
        targetPage >= 1 &&
        targetPage <= numOfPages
        ) {
        setPage(targetPage);
        setInputPage("");
        }
    };

    function comfort() {
        const pages = [];

        
        
        pages.push(
        <button
            key={1}
            onClick={() => setPage(1)}
            className={page === 1 ? "active" : ""}
        >
            1
        </button>
        );

        

        if (page > 3) {
        pages.push(<span key="left-ellipsis">…</span>);
        }

        

        if (page === 1) {
        if (numOfPages >= 2) {
            pages.push(
            <button
                key={2}
                onClick={() => setPage(2)}
                className={page === 2 ? "active" : ""}
            >
                2
            </button>
            );
        }
        if (numOfPages >= 3) {
            pages.push(
            <button
                key={3}
                onClick={() => setPage(3)}
                className={page === 3 ? "active" : ""}
            >
                3
            </button>
            );
        }
        } else {
        for (let p = page - 1; p <= page + 1; p++) {
            if (p > 1 && p < numOfPages) {
            pages.push(
                <button
                key={p}
                onClick={() => setPage(p)}
                className={page === p ? "active" : ""}
                >
                {p}
                </button>
            );
            }
        }
        }

        

        if (page < numOfPages - 2) {
        pages.push(<span key="right-ellipsis">…</span>);
        }



        if (numOfPages > 1) {
        pages.push(
            <button
            key={numOfPages}
            onClick={() => setPage(numOfPages)}
            className={page === numOfPages ? "active" : ""}
            >
            {numOfPages}
            </button>
        );
        }

        return pages;
    }

    return (
        <div>
            <div className="pagination">
                <button onClick={handlePrev} disabled={page === 1}>
                    {"<"}
                </button>
                {comfort()}
                <button onClick={handleNext} disabled={page >= numOfPages}>
                    {">"}
                </button>
            </div>
            <div className="goto-form">
                <form onSubmit={handleGoToPage} className="goto-form">
                    <input
                    type="number"
                    min="1"
                    max={numOfPages}
                    value={inputPage}
                    onChange={(e) => setInputPage(e.target.value)}
                    placeholder="Go to…"
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
        </div>
    );
}
