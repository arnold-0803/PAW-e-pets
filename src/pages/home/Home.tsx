import React from 'react';
import Pet from './Pet';
import HeroBannar from '../../components/HeroSection';
import "./Home.css";
import useFetch from '../../assets/useFetch';
import SlideSection from '../../components/SlideSection';
import { Reviews } from '../../data/ReviewData';

const Home: React.FC = () => {
  const {data, error, loading} = useFetch("https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=cats+dogs&per_page=12");

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
          {data.map((item, index)=>
            <Pet key={index} data={item}/>
          )}
        </div>
      </div>
      <div className="home-swiper-box">
        <div className="swiper-header">
          <div className="heading">
            <h3>Reviews from Clients</h3>
          </div>
        </div>
        <SlideSection 
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