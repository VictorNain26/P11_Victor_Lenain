import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHousing } from "../data";
import { Accordion } from "../components/accordion";
import { Tag } from "../components/tag";
import { Rating } from "../components/rating";
import { Carousel } from "../components/carousel";

export const Housing = () => {
  const [housing, setHousing] = useState({});
  const { housingId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getHousing(housingId);

    if (!data) {
      return navigate("/404", { replace: true })
    }

    setHousing(data);
  }, [housingId, navigate]);

  return (
    <>
      <Carousel pictures={ housing.pictures } />

      <div className="grid grid-cols-1 mt-2 lg:grid-cols-2 lg:mb-6 lg:mt-7">
        <div className="flex flex-col">
          <h1 className="text-lg mb-1 lg:text-4xl">{ housing.title }</h1>
          <h2 className="text-sm mb-3 lg:text-lg">{ housing.location }</h2>
          <div className="grid grid-cols-3 gap-2 mb-6">
            { housing.tags?.map((tag, id) => ( <Tag title={ tag } key={ id } /> )) }
          </div>
        </div>

        <div className="flex justify-between items-center w-full mb-4 lg:flex-col-reverse lg:items-end">
          <div className="flex">
            <Rating stars={housing.rating} />
          </div>
          <div className="flex items-center">
            <p className="text-right mr-3 break-normal w-12 lg:text-lg lg:mr-10">{ housing.host?.name }</p>
            <img src={housing.host?.picture} alt="host" className="rounded-full w-8 lg:w-16" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:gap-20 lg:grid-cols-2">
        <Accordion title="Description" content={ housing.description } />
        <Accordion title="Équipements" content={ housing.equipments } />
      </div>
    </>
  );
}
