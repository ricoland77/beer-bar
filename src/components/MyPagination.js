import "../css/pagination.css";

import Pagination from "react-responsive-pagination";

function MyPagination({ page, setPage }) {
  const totalPages = 10;

  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <Pagination current={page} total={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default MyPagination;
