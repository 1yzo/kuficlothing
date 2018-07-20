import React from 'react';
import Slider from 'react-slick';
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'image-slider'
  };

const ProductImages = ({ image, extraPics }) => {
    return (
        <div className="product-images">
            <Slider {...settings}>
                <div>
                    <img className="image-big"src={image} alt="pic" />
                </div>
                {extraPics.length > 1 && extraPics.slice(1).map((pic, i) => (
                    <div key={i}>
                        <img className="image-big" src={pic} alt="pic"/>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default ProductImages;