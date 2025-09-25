import "../styles/Admin.css";





export default function Pagination({ 
    numOfPages, 
    page, 
    setPage
}) {
    


    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    

    const handleNext = () => {
        if (page < numOfPages) setPage(page + 1);
    };



    return (
        <div>
            <div className="pagination">
                <button onClick={handlePrev} disabled={page === 1}>
                Previous
                </button>
                <span>
                Page {page} of {numOfPages}
                </span>
                <button onClick={handleNext} disabled={page >= numOfPages}>
                Next
                </button>
            </div>
        </div>
    )
}