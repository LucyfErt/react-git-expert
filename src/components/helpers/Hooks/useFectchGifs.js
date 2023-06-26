import { useEffect, useState } from "react";
import { getGifs } from "../getGifs";

export const useFectchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsloading]=useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsloading(false)
    };
  
    useEffect(() => {
      getImages();
    }, [category]);





  return {
    images,
    isLoading
  }
}
