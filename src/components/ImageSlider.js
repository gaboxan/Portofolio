import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImageSlider = ({images}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i, isActive) => (
      <span style={{ 
     
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: isActive ? '#007acc' : 'gray',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
      fontWeight: 'bold',
      boxShadow: isActive ? '0 0 10px rgba(0, 0, 0, 0.3)' : '',
      transition: 'all 0.3s',}}>
        {i + 1}
      </span>
    ),
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt=''
            style={{
              borderRadius: '20px',
              maxWidth: '100%',
              height: 'auto'
            }}
          />
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  @media (min-width: 601px) {
    .slick-dots {
      display: none !important;
    }
  }
  @media (max-width: 600px) {
    .slick-dots {
      position: absolute;
      bottom: 10px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export default ImageSlider;
