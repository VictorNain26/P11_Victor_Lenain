import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Router } from "./components/router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <main className="px-5 pt-5 lg:px-24 lg:pt-10 min-h-screen">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </main>
    <Footer />
  </React.StrictMode>
);
