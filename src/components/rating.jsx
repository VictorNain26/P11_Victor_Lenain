import emptyStar from "../assets/empty_star.svg";
import filledStar from "../assets/filled_star.svg";

export const Rating = ({ stars }) => {
  return (
    <>
      { Array.from({ length: parseInt(stars) }, (v, id) => <img src={ filledStar } alt="stars" key={ id } className="w-5 lg:w-9" />) }
      { Array.from({ length: 5 - parseInt(stars) }, (v, id) => <img src={ emptyStar } alt="stars" key={ id } className="w-5 lg:w-9" />) }
    </>
  );
}
