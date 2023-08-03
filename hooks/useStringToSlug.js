import { useState, useEffect } from 'react';


const useStringToSlug = (str) => {
  const [slug, setSlug] = useState("category");

	useEffect(() => {
		const strToSlug = (str) => {
			return str
				.trim() //remove whitespace from start and end
				.toLowerCase() //covert to lowercase
				.replace(/[\W_]+/g, '-') //convert non-word character (including symbols, spaces, and punctuation), and _ to hyphen
				.replace(/^-+|-+$/g, ''); //remove leading and trailing hyphens from a string
		}
		setSlug(strToSlug(str));
	},[str])
  
  return slug;
};

export default useStringToSlug;
