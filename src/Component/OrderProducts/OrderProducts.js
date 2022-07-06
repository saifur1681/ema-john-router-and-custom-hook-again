import React from 'react';

const OrderProducts = (props) => {
    const { name, quantity, price, key } = props.products;
    const { handleRemove } = props;
    return (
        <div className="product-container" >
            <div>
                <h3 className="product-style">{name}</h3>
                <h4>Quantity: {quantity}</h4>
                <h5 className="product-style" >$ {price}</h5>
                <button
                    onClick={() => handleRemove(key)}
                    className="btn-cart">Remove</button>
            </div>
        </div>
    );
};

export default OrderProducts;