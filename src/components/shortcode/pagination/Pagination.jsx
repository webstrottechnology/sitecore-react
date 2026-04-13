import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./Pagination.scss";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 6;

  const handlePrev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };

  return (
    <div className="pagination-wrapper Pagination_mr_wrapper">
      <div className="pagination-container">
        <button className="nav-btn" onClick={handlePrev}>
          <FiArrowLeft />
        </button>

        <div className="pages">
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;

            return (
              <Link
                key={page}
                to={`/team/page/${page}`}
                className={`page ${activePage === page ? "active" : ""}`}
                onClick={() => setActivePage(page)}
              >
                {page}
              </Link>
            );
          })}
        </div>

        <button className="nav-btn" onClick={handleNext}>
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
