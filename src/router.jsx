import { Route, Routes, Navigate } from 'react-router-dom';
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Housing } from "./pages/housing";
import { Error } from "./pages/error";

export const Router = () => {
  return (
    <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/housing/:housingId" element={ <Housing /> } />
        <Route path="404" element={ <Error /> } />
        <Route path="*" element={ <Navigate to="/404" replace /> } />
    </Routes>
  );
}
