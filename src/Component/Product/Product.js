import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    // console.log(props)

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product-container">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h3 className="product-style">{name}</h3>
                <p>by: {seller}</p>
                <h4 className="product-style">$ {price}</h4>
                <p>only {stock} left in stock - order soon</p>
                <button
                    onClick={() => props.handleClicked(props.product)}
                    className="btn-cart"  >{cartIcon}add to cart</button>

            </div>
        </div>
    );
};

export default Product;