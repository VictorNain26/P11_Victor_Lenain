import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center py-28 px-2">
      <h1 className="text-8xl font-bold mb-3 lg:mb-16 lg:text-[18rem]">404</h1>
      <h2 className="text-lg text-center mb-32 lg:mb-44 lg:text-4xl">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="text-sm lg:text-lg underline">Retourner sur la page d’accueil</Link>
    </div>
  );
}
