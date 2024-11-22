// IMPORT useState
import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components//Main";
import Footer from "./components//Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
