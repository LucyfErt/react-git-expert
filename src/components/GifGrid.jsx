import { GifItem } from "./GifItem";
import { useFectchGifs } from "./helpers/Hooks/useFectchGifs";

export const GifGrid = ({ category }) => {

    const{images, isLoading} = useFectchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
