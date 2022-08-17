import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className="flex mb-4 justify-between items-center lg:mb-10">
      <img src={ logo } alt="Logo" className="w-36 lg:w-52" />
      <nav>
        <ul className="flex">
          <li className="uppercase lg:capitalize lg:text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "underline" : ""}
            >
              accueil
            </NavLink>
          </li>
          <li className="uppercase ml-3 lg:ml-14 lg:capitalize lg:text-2xl">
            <NavLink
              to="about"
              className={({ isActive }) => isActive ? "underline" : ""}
            >
              a propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
