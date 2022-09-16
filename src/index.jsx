import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Router } from "./router";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <main className="min-h-screen px-5 pt-5 lg:px-24 lg:pt-10">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </main>
    <Footer />
  </React.StrictMode>
);
