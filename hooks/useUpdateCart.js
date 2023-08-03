import { useState, useEffect } from "react";

const useUpdateCart = () => {
	
  const [cartItems, setCartItems] = useState(localStorage.getItem("cart"));
	const [cartCount, setCartCount] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const addToCart = (item) => {
		setCartItems((prevCartItems) => {
			
			return [...prevCartItems, item];
		});
	}

	// const removeFromCart = (item) => {
	// 	const filteredItems = cartItems.filter(el => el.id !== item.id);
	// 	setCartItems(filteredItems);
	// }

	useEffect(()=>{
		setCartCount(cartItems.length);
	},[cartItems]);
	
	return {cartCount, cartItems, addToCart,isLoading};

}

export default useUpdateCart;