import React from 'react';
import Pet from './Pet';
import HeroBannar from '../../components/HeroSection';
import "./Home.css";
import useFetch from '../../components/useFetch';

const Home: React.FC = () => {

  const {data, error, loading} = useFetch("https://pixabay.com/api/?key=43296904-a69d2147a6885fcb843b07884&q=cats+dogs&per_page=12");

  if (loading) {
    return <div>Loading...</div>;
  }
    
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <HeroBannar/>
      <div className="shelf-wrapper">
        <div className="header">
          <h3>Pets Shelf</h3>
        </div>
        <div className="card-wrapper">
          {data.map((item, index)=>
            <Pet key={index} data={item}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home