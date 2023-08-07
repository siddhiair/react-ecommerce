import { useState, useEffect } from "react";

const useUpdateCart = () => {
  const [cartItems, setCartItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	// const removeFromCart = (item) => {
	// 	const filteredItems = cartItems.filter(el => el.id !== item.id);
	// 	setCartItems(filteredItems);
	// }

	const addToCart = async(item) => {
		console.log(item)
	}
	return {cartItems, addToCart, isLoading};
}

export default useUpdateCart;