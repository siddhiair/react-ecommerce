import React, { createContext, useContext, useState, useEffect } from 'react';

const AppStateContext = createContext();

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (data) => {
		const cartData = {
			id:data.id,
			title:data.title,
			price:data.price,
			quantity:1
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
		setCartCount(cartCount+1);
	}

  // Fetch the cartItems from local storage and calculate cart qty
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let qty = 0;
    if(cartItems){
      qty = cartItems.reduce((total,currentVal)=>{
        return total+currentVal.quantity
      },0)
    }
    setCartCount(qty);
  }, []);

  return (
    <AppStateContext.Provider value={{ cartCount, addToCart, isLoading }}>
      {children}
    </AppStateContext.Provider>
  );
};
