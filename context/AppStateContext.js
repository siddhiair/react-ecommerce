import React, { createContext, useContext, useState, useEffect } from 'react';

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
		const cartData = {
			id:data.id,
			title:data.title,
			price:data.price,
			quantity:1,
      category:data.category,
      image: data.image
		}
		
    const lstCartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //check if cartItems are already set in localStorage
		//if product is already in cart, update quantity value
		const existingCartItem = lstCartItems.find((item) => item.id === data.id);
		if(existingCartItem){
			existingCartItem.quantity += 1 
		}
		else{
			lstCartItems.push(cartData);
		}
		localStorage.setItem("cartItems",JSON.stringify(lstCartItems))
    setCartItems(lstCartItems)
		setCartCount(cartCount+1);
	}

  const clearCart = () => {
    localStorage.removeItem("cartItems")
    setCartItems([])
		setCartCount(0);
  }

  const removeCartItem = (id,qty) => {
    let lstCartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //check if cartItems are already set in localStorage
    const existingCartItem = lstCartItems.find((item) => item.id === id);
    if(qty===0){      
      lstCartItems = lstCartItems.filter(obj => obj.id !== id); // updates array by removing item
    }
    if(lstCartItems.length === 0){
      clearCart();
      return false;
    }
    existingCartItem.quantity = qty;
    localStorage.setItem("cartItems",JSON.stringify(lstCartItems))
    setCartItems(lstCartItems);
    setCartCount(cartCount-1);
  }

  // Fetch the cartItems from local storage and calculate cart qty
  useEffect(() => {
    let qty = 0;
    const lstCartItems = JSON.parse(localStorage.getItem('cartItems')) || []; //check if cartItems are already set in localStorage
    if(lstCartItems){
      qty = lstCartItems.reduce((total,currentVal)=>{
        return total+currentVal.quantity
      },0)
    }
    setCartItems(lstCartItems)
    setCartCount(qty);
  }, []);

  return (
    <AppStateContext.Provider value={{ cartCount, addToCart, cartItems, clearCart,removeCartItem }}>
      {children}
    </AppStateContext.Provider>
  );
};
