// IMPORT useState
import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components//Main";
import Footer from "./components//Footer";
import Reservations from "./components/reservations/Reservations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoContent from "./components/NoContent";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<NoContent />} />
          <Route path="/menu" element={<NoContent />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/login" element={<NoContent />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
