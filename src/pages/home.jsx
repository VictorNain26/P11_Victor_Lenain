import { getAllHousings } from "../data";
import { Thumb } from "../components/thumb";

export const Home = () => {
  const housings = getAllHousings();

  return (
    <div className="flex flex-col">
      <div className="rounded-xl bg-home_background bg-no-repeat bg-cover lg:text-center py-8 pl-4 mb-6 lg:mb-11 lg:py-20 lg:rounded-3xl">
          <p className="w-56 text-2xl text-white leading-6 lg:text-5xl lg:w-full">Chez vous, partout et ailleurs</p>
      </div>
      <div className="lg:bg-neutral-100 rounded-3xl lg:py-14 lg:px-10 mb-8">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 lg:gap-11">
          { housings.map((housing) => ( <Thumb housing={ housing } key={housing.id} /> )) }
        </div>
      </div>
    </div>
  );
}
