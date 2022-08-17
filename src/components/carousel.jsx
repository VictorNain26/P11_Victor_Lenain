import { useState } from "react";
import arrowRight from "../assets/arrow_right.svg";
import arrowLeft from "../assets/arrow_left.svg";

export const Carousel = ({ pictures }) => {
  const [slideId, setSlideId] = useState(0);

  const imgSize = () => {
      const slideshowImg = document.querySelector(".slideshow-container img");
      if(!slideshowImg){
          return 0;
      }
      return slideshowImg.width;
  }

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
      <div className="grid grid-cols-1 relative overflow-hidden slideshow-container rounded-lg h-[255px] lg:h-[415px]">
          <div className="flex transition-all duration-300" style={{ transform: `translateX(-${slideId * imgSize()}px)` }}>
            { pictures?.map((picture) => < img className="rounded-lg object-cover" src={picture} alt={picture} key={picture}/>) }
          </div>
          <div className="flex justify-between w-full absolute top-2/4 px-1">
              <img src={ arrowLeft } className="w-6 lg:w-24" alt="back" onClick={ onPrev }/>
              <img src={ arrowRight } className="w-6 lg:w-24" alt="next" onClick={ onNext }/>
          </div>
          <div className="hidden absolute text-white text-lg bottom-5 right-2/4 lg:block">{ slideId + 1 }/{ pictures?.length }</div>
      </div>
  );
}
