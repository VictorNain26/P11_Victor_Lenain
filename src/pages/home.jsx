import { getAllHousings } from "../data";
import { Thumb } from "../components/thumb";

export const Home = () => {
  const housings = getAllHousings();

  return (
    <div className="flex flex-col">
      <div className="relative py-14 pl-4 lg:py-24">
        <div className="
          absolute
          top-0
          left-0
          brightness-75
          rounded-xl
          lg:rounded-3xl
          bg-home_background
          bg-no-repeat
          bg-cover
          w-full
          h-full
        ">
        </div>
        <p className="brightness-100 w-56 text-2xl text-white lg:text-center leading-6 lg:text-5xl lg:w-full">
          Chez vous, partout et ailleurs
        </p>
      </div>
      <div className="lg:bg-neutral-100 rounded-3xl lg:py-14 lg:px-10 mb-8 mt-6 lg:mt-11">
        <div className="grid grid-cols-1 gap-5 lg:gap-11 md:grid-cols-2 xl:grid-cols-3">
          { housings.map((housing) => ( <Thumb housing={ housing } key={ housing.id } /> )) }
        </div>
      </div>
    </div>
  );
}
