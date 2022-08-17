import { Link } from "react-router-dom";

export const Thumb = ({ housing }) => {
  return (
    <Link
      to={ `/housing/${ housing.id }` }
      className="
        flex
        items-end
        rounded-xl
        bg-gradient-to-b
        from-red-400
        via-red-400
        to-neutral-500
        w-full
        h-[15.938rem]
        lg:h-[21.25rem]
      "
    >
      <h3 className="text-white text-lg ml-5 mb-4">{ housing.title }</h3>
    </Link>
  );
}
