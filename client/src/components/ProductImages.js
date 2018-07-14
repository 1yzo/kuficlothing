import React from 'react';

const ProductImages = ({ image, extraPics }) => {
    return (
        <div>
            <img className="image--big" src={image} alt="main image" />
        </div>
    );
}

export default ProductImages;