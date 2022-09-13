import React, { useState, createContext } from 'react';
import { getProductForHomePage } from './ProductService';
import { getProductDetail } from './ProductService';
import { saveCart } from './ProductService';
import { search } from './ProductService';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {

    const { children } = props;

    const [cart, setCart] = useState([]);

    const updateCart = (product, price, quantity, checked) => {
        let _cart = cart;
        quantity = quantity > 3 ? 3 : quantity;
        if (_cart.length == 0) {
            //giỏ hàng rỗng
            _cart.push({ product, price, quantity, checked });
        } else {
            let item = _cart.filter(i => i.product._id == product._id);
            if (item.length == 0) {
                //không có sản phẩm này trong giỏ hàng
                _cart.push({ product, price, quantity, checked });
            } else {
                //có sản phẩm này trong giỏ hàng
                if (quantity == 0) {
                    //nếu số lượng = 0, xóa sp khỏi giỏ hàng
                    _cart = _cart.filter(i => i.product._id != product._id);
                } else {
                    //cập nhật số lượng của sản phẩm
                    _cart = _cart.map(item => {
                        if (item.product._id == product._id) {
                            item.quantity = quantity > 3 ? 3 : quantity;
                        }
                        return item;
                    })
                }
            }
        }
        setCart([..._cart]);
    }

    const getCart = () => cart;

    const deleteCart = () => setCart([...[]]);

    const onGetProductForHomePage = async () => {
        try {
            const res = await getProductForHomePage();
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onGetProductForHomePage error: ', error);
        }
        return [];
    }

    const onGetProductDetail = async (id) => {
        try {
            const res = await getProductDetail(id);
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onGetProductDetail error', error);
        }
        return null;
    }

    const onSaveCart = async () => {
        try {
            let total = 0;
            let products = [];
            for (let index = 0; index < cart.length; index++) {
                const element = cart[index];
                total += element.quantity * element.price;
                products.push({
                    product: element.product._id,
                    quantity: element.quantity,
                    price: element.price
                });
            }
            await saveCart({ total, products });
            setCart([...[]]);
        } catch (error) {
            console.log('onSave error', error);
        }
    }

    const onSearch = async (name) => {
        try {
            const res = await search(name);
            if (res.error == false) {
                return res.data;
            }
        } catch (error) {
            console.log('onSearch error', error);
        }
        return [];
    }

    return (
        <ProductContext.Provider
            value={{
                onGetProductForHomePage, onGetProductDetail,
                updateCart, getCart, deleteCart, cart, onSaveCart
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};