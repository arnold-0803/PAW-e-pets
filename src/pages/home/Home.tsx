import React, { useState } from 'react';
import Pet from './Pet';
import HeroBannar from '../../components/HeroSection';
import "./Home.css";
import useFetch from '../../assets/useFetch';
import { Reviews } from '../../data/ReviewData';
import SwiperSlides from '../../components/SwiperSlideSection';
import Elementor from '../../components/Elementor';
import PaginationForPages from '../../components/PaginationForPages';

const Home: React.FC = () => {
  const {data, error, loading} = useFetch("https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=cats+dogs&per_page=12");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 8;
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

  const breakpoints={
    0: {
      slidesPerView: 1
    },
    1201: {
      slidesPerView: 2
    }
  };

  return (
    <div className="home">
      <HeroBannar 
        list1='Totam optio veniam accusamus rem, quas.'
        list2 = 'Lorem ipsum dolor, sit amet adipisicing elit.'
        list3 = 'Recusandae ullam officia facere consectetur.'
        list4 = 'voluptatibus sit repellendus quis quasi placeat omnis .'
        bullets='fa-solid fa-paw'
      />
      <div className="shelf-wrapper">
        <div className="heading">
          <h3>Pets Shelf</h3>
        </div>
        <div className="card-wrapper">
          <div className="card-items">
            {currentItems.map((item, index)=>
              <Pet key={index} data={item}/>
            )}
          </div>
            <PaginationForPages
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
        </div>
      </div>
      <div className="elementor-element">
          <Elementor/>
      </div>
      <div className="home-swiper-wrapper">
        <div className="heading">
          <h3>Reviews from Clients</h3>
        </div>
          <SwiperSlides 
            reviews={Reviews}
            slidesPerView={4}
            spaceBetween={30}
            pagination={true}
            navigation={false}
            breakpoints={breakpoints}
          />
      </div>
    </div>
  )
}

export default Home;