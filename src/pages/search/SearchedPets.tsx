import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSearch from '../../assets/useSearch';
import "./SearchedPetsStyles.css";
import PaginationForPages from '../../components/PaginationForPages';

const api_key: string = "43296904-a69d2147a6885fcb843b07884"; 

const createPixabaySearchUrl = (query: string, perPage: number = 100) => {
  return `https://pixabay.com/api/?key=${api_key}&q=${encodeURIComponent(query)}&image_type=pets&per_page=${perPage}&safesearch=true`;
}

const SearchedPets: React.FC = () => {
  const {query} = useParams<{query: string}>();
  const url = createPixabaySearchUrl(query || "");
  const {data, error, loading} = useSearch(url);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 12;
  // calculate the indices for slicing the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(data) ? data.slice(indexOfFirstItem, indexOfLastItem) : [];
  // culculate total pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }
    
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="searched-wrapper">
      <div className="heading">
        <h3>({data.length})Results Found</h3>
      </div>
      <>
        {data && data.length > 0 ? (
          <div className='searched-photos'>
            {currentItems.map((item, index) => 
              <div className="searched" key={index}>
                <div className="image">
                  <img src={item.webformatURL} alt="" />
                </div>
                <h4>{item.tags}</h4>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1>Search Results for {query} Not Found</h1>
          </div>
        )}
      </>
      <PaginationForPages
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default SearchedPets;