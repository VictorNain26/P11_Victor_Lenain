import { useState } from "react";
import arrow from "../assets/arrow.png";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col mb-5 rounded lg:mb-8">
      <div className="flex justify-between bg-red-400 rounded py-1 px-3 cursor-pointer" onClick={ () => setIsActive(!isActive) }>
        <h2 className="text-white lg:text-2xl">{ title }</h2>
        <img src={ arrow } alt="" className={ `w-4 object-contain transition-all duration-300 ${isActive ? "rotate-180" : ""}` } />
      </div>
      <div className={ `bg-neutral-100 rounded overflow-hidden transition-height duration-300 ${isActive ? "h-100" : "h-0"}` } >
        <p className="pt-4 pl-3 pr-1 pb-12 font-normal lg:pl-6 lg:pt-8 lg:pb-2 lg:text-2xl">{ content }</p>
      </div>
    </div>
  );
}
