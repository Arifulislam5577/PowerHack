import React from "react";

const Pagination = ({ pageNumber, setPage, page }) => {
  return (
    <div className="flex justify-center space-x-1 dark:text-gray-100">
      <button
        title="previous"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {!isNaN(pageNumber) &&
        [...Array(pageNumber).keys()].map((btnNumber) => (
          <button
            type="button"
            className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  ${
              page === btnNumber + 1 ? "bg-orange-600" : "bg-gray-900"
            }`}
            key={btnNumber}
            onClick={() => setPage(btnNumber + 1)}
          >
            {btnNumber + 1}
          </button>
        ))}

      <button
        title="next"
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
        disabled={page === pageNumber}
        onClick={() => setPage(page + 1)}
      >
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
