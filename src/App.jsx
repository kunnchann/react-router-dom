import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, BooksPage, DetailBookPage } from "./pages/index";
import { NavBarComponent, PageNotFoundComponent } from "./components/index";

const App = () => {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-all-book" element={<BooksPage />} />
        <Route path="/detail-book/:id" element={<DetailBookPage />} />
        <Route path="*" element={<PageNotFoundComponent />} />
      </Routes>
    </div>
  );
};

export default App;
