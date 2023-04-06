import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = ({images}) => {
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt=''
          style={{
            borderRadius: '20px',
            width: '500px',
            height: '300px'
          }}
        />
      ))}
    </Slider>
  );
};

export default ImageSlider;
