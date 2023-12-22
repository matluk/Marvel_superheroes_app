import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";

import "./App.css";

import { Add } from "./components/Add/Add";
import { GlobalProvider } from "./context/GlobalState";
import { Favorites } from "./components/Favorites/Favorites";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
