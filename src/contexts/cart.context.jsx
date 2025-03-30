import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? 
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    )
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemsToCart: () => {},
    countItems: 0,
});

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [countItems, setCountItems] = useState(0);

    useEffect(() => {
      const newCountItems = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
      setCountItems(newCountItems);
    }, [cartItems])
    
    
    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value ={isCartOpen, setIsCartOpen, cartItems, addItemsToCart, countItems, setCountItems};
    
    return(
        <CartContext.Provider value={value}> { children } </CartContext.Provider>
    )
}