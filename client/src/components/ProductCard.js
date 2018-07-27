import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ProductCard = ({ name, image, price, stock }) => {
    return (
        <Link className="card-holder" to={`/products/${name}`}>
            <div className="product-card">
                <img src={`${image}`} alt={`${name}`} />
                {(stock.small < 1 && stock.medium < 1 && stock.large < 1 && stock.xLarge < 1) &&
                    <div className="overlay overlay--stock">
                        SOLD OUT
                    </div>
                }
                <div className="overlay">
                    <div>{name}</div>
                    <div>{numeral(price / 100).format('$0, 0.00')}</div>
                </div>
            </div>
        </Link>
    );
}

export default ProductCard;