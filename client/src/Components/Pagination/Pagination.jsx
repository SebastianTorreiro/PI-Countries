import React from 'react'
import "./pagination.css"
export default function Pagination({cardPerPage, totalCards, paginate, currentPage, setCardPerPage}) {

    const pageNumbers = [];
    

    for (let i = 1; i <= Math.ceil(totalCards/cardPerPage); i++) {
        pageNumbers.push(i);
    }
      
  // console.log("total", totalCards);
  // console.log(cardPerPage);
  // console.log(pageNumbers)


  return (
    <div className='pag'>
        <button className='PyN-button' onClick={() => paginate(currentPage - 1)}>{"<"}</button>
        <ul>
        {pageNumbers.length > 1 &&
            pageNumbers.map((p, i) =>
              p === currentPage ? (
                <li key={i}>
                  <button className="pag-btn-activate" onClick={() => paginate(p)}>
                    {p}
                  </button>
                </li>
              ) : (
                <li key={i}>
                  <button className="pag-btn" onClick={() => paginate(p)}>
                    {p}
                  </button>
                </li>
              )
            )}
        </ul>
        <button className='PyN-button' onClick={() => paginate(currentPage + 1)}>{">"}</button>

    </div>
  )
}
