import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { SlideSectionProps } from '../assets/types';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const SwiperSlides: React.FC<SlideSectionProps> = ({
  reviews,
  spaceBetween = 50,
  slidesPerView= 1,
  loop = true,
  navigation = true,
  pagination = true,
  breakpoints = {}
}) => {
  return (
    <div>
      <h3>{}</h3>
      <Swiper
      className='swiper'
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      navigation={navigation}
      pagination={pagination}
      breakpoints={breakpoints}
      modules={[Navigation, Pagination]}
      >
        {reviews.map((item, index) => (
          <SwiperSlide 
            className='slide'
            key={index}
          >
            <div className="person-image">
              <img src={item.image} alt="" />
              <p><b>{item.personName}</b></p>
            </div>
            <div className="content">
              <p>{item.testimony}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlides;