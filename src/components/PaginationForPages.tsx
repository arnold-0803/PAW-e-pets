import React from 'react';
import "./PaginationForPagesStyles.css";
import { PaginationProps } from '../assets/types';

const PaginationForPages: React.FC<PaginationProps> = ({totalPages, currentPage, setCurrentPage}) => {

  const handlePrevious = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if(currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  const pageNumbers = Array.from({length: totalPages}, (_, index) => index + 1);

  return (
    <div className='pagination-wrapper'>
      <button 
        onClick={handlePrevious} 
        disabled={currentPage === 1}
        className='previous-btn'
      >
        Previous
      </button>
      <i className='fa-solid fa-chevron-left'></i>
      <div className="number-wrapper">
        {pageNumbers.map(number => (
          <button 
            key={number}
            onClick={() => handlePageClick(number)}
            disabled={number === currentPage}
            className='number-btn'
          >
            {number}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='next-btn'
      >
        Next
      </button>
      <i className='fa-solid fa-chevron-right'></i>
    </div>
  )
}

export default PaginationForPages;
