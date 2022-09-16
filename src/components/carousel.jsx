import { useState } from "react";
import arrowRight from "../assets/arrow_right.svg";
import arrowLeft from "../assets/arrow_left.svg";

export const Carousel = ({ pictures }) => {
  const [slideId, setSlideId] = useState(0);

  const onNext = () => {
    if(slideId === pictures?.length - 1){
      setSlideId(0)
    } else {
      setSlideId(slideId + 1)
    }
  }

  const onPrev = () => {
    if(slideId === 0){
      setSlideId(pictures?.length - 1)
    } else {
      setSlideId(slideId - 1)
    }
  }

  return (
    <div className="flex relative h-[255px] lg:h-[415px] overflow-hidden slideshow-container rounded-lg">
      { pictures !== undefined ?  < img className="rounded-lg object-cover w-full" src={ pictures[slideId] } alt={ pictures[slideId] } key={ pictures[slideId] }/> : '' }

      <div className="absolute flex justify-between items-center w-full h-full px-1 z-10">
        <img src={ arrowLeft } className="w-12 lg:w-24" alt="previous" onClick={ onPrev }/>
        <img src={ arrowRight } className="w-12 lg:w-24" alt="next" onClick={ onNext }/>
      </div>
      <div className="hidden lg:block absolute text-white text-lg bottom-5 w-full text-center">{ slideId + 1 }/{ pictures?.length }</div>
    </div>
  );
}
