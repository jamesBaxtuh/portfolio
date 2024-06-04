import { useEffect } from "react";

const useImagePreloader = (imageUrlArray) => {
	useEffect(() => {
		for (let imageUrl of imageUrlArray) {
			const newImage = new Image();
			newImage.src = imageUrl;
		}
	}, [imageUrlArray]);
};

export default useImagePreloader;
