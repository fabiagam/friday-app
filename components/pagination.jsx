/*************************************
 * Pagination
 * @file: components/pagination.jsx
 * @author: James Abiagam
 ************************************/
import { useState, useEffect } from "react";

export default function Pagination({
  data,
  RenderComponent,
  title,
  pageLimit,
  dataLimit,
  make,
  model,
}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const AllVehicles = getPaginatedData();
  const count = data.length;
  return (
    <div>
      <h1>{title}</h1>
      {/* show the results , 10 search results at a time */}
      <div className="dataContainer">
        <RenderComponent
          total={count}
          vehicles={AllVehicles}
          make={make}
          model={model}
        />
      </div>

      {/* show the pagiantion
            it consists of next and previous buttons
            along with page numbers, in this case, 5 page
            numbers at a time
        */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
}
