import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './style';
import Card from '../Card';

function Slider ({ info, title }) {
  console.log(info, title);
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10} // Espaço entre os cardsQuantos Cards na tela
        slidesPerView={'auto'} //Quantos Cards na tela
        className='swiper'
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
