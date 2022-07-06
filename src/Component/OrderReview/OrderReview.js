import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderProducts from '../OrderProducts/OrderProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        const removeItem = cart.filter(product => product.key !== key);
        setCart(removeItem)

        removeFromDb(key);
    }
    return (
        <div className="shop-component" >
            <div className="products-container">
                {
                    cart.map(products => <OrderProducts
                        key={products.key}
                        products={products}
                        handleRemove={handleRemove}
                    ></OrderProducts>)
                }
            </div>

            <div>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default OrderReview;