import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSearchProducts(data)
            })
    }, []);

    // useEffect(() => {
    //     if (products.length) {
    //         const savedCart = getStoredCart()
    //         const storedCart = [];
    //         for (const key in savedCart) {
    //             const addedProduct = products.find(product => product.key === key);

    //             if (addedProduct) {
    //                 const quantity = savedCart[key];
    //                 addedProduct.quantity = quantity;
    //                 storedCart.push(addedProduct);
    //             }

    //         }
    //         setCart(storedCart);
    //     }
    // }, [products]);

    useEffect(() => {
        if (products.length) {
            const getLocalStorage = getStoredCart();
            const storedCart = [];
            for (const key in getLocalStorage) {
                const getProduct = products.find(product => product.key === key);
                if (getProduct) {
                    const quantity = getLocalStorage[key];
                    getProduct.quantity = quantity;
                    storedCart.push(getProduct);
                }
            }
            setCart(storedCart);
        }

    }, [products]);

    const handleClicked = product => {
        const totalCartItem = [...cart, product];
        setCart(totalCartItem);
        // addToDb(product.key);
        addToDb(product.key);
    };

    // const handleSearch = event => {
    //     const searchText = event.target.value;

    //     const searchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    //     setDisplayProducts(searchProduct);
    // }

    const searchProduct = event => {
        const searchText = event.target.value;
        const searchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(searchProduct);
    };

    return (
        <>
            <div className="input-container">
                <input
                    onChange={searchProduct}
                    // onChange={handleSearch}
                    placeholder="Search Your Product"
                    type="text" />
                <FontAwesomeIcon
                    className="icon"
                    icon={faMagnifyingGlass} />
            </div>
            <div className="shop-component" >
                <div className="products-container">

                    {
                        searchProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleClicked={handleClicked}
                        />)
                    }
                </div>
                <div>
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;