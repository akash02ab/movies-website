export default function Pagination ({
  currentPage,
  setCurrentPage,
  pages, setPages }) {
  const [minPage, maxPage] = [1, 1000];

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < minPage) return;

    const index = 0;
    const firstPage = pages[index];

    if (currentPage === firstPage) {
      const prevPages = pages.map((page) => page - 5);
      setPages(prevPages);
    }

    setCurrentPage(prevPage);
  }

  const nextHandler = () => {
    const nextPage = currentPage + 1;

    if (nextPage > maxPage) return;

    const index = pages.length - 1;
    const lastPage = pages[index];

    if (currentPage === lastPage) {
      const nextPages = pages.map((page) => page + 5);
      setPages(nextPages);
    }

    setCurrentPage(nextPage);
  }

  return (
    <div className="pagination">
      <button
        onClick={prevHandler}
        disabled={currentPage === minPage}
        className="prev-btn"
      >{"<"}</button>
      {
        pages.map((page, index) => (
          <span
            key={index}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'selected' : 'page'}
          >{page}</span>)
        )
      }
      <button
        onClick={nextHandler}
        disabled={currentPage === maxPage}
        className="next-btn"
      >{">"}</button>
    </div>
  )
}