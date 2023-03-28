/* eslint-disable jsx-a11y/accessible-emoji */

export const Pagination = ({
  activePage,
  count,
  rowsPerPage,
  totalPages,
  setActivePage,
}) => {
  const beginning = activePage === 1 ? 1 : rowsPerPage * (activePage - 1) + 1
  const end = activePage === totalPages ? count : beginning + rowsPerPage - 1
  return (
    <>
      {totalPages !== 1 && (
        <div className="pagination">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px rounded-xl overflow-hidden border-2">
              <li>
                <button
                  disabled={activePage === 1}
                  onClick={() => setActivePage(activePage - 1)}
                  className=" px-1 py-0.5 cursor-pointer  w-8"
                >
                  ⬅️
                </button>
              </li>
              {Array.from(Array(totalPages), (e, i) => {
                return (
                  <li>
                    <button
                      onClick={() => setActivePage(i + 1)}
                      className={`px-1 py-0.5 cursor-pointer  min-w-[26px] ${
                        activePage === i + 1 && 'bg-green-400 rounded-[50%]'
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              })}
              <li>
                <button
                  disabled={activePage === totalPages}
                  onClick={() => setActivePage(activePage + 1)}
                  className=" px-1 py-0.5 cursor-pointer w-8"
                >
                  ➡️
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
