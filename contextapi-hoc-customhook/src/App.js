import React, { useState } from "react";

import "./styles.css";

import { Content, PassphraseForm, Movies, Places } from "./Components";
import { PasscodeContext } from "./Contexts/Passcode";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [isAuthenticated, setIsAuthencticated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/places" element={<Places />} />
          <Route
            path="/"
            element={
              <PasscodeContext.Provider
                value={{ isAuthenticated, setIsAuthencticated }}
              >
                {!isAuthenticated ? <PassphraseForm /> : <Content />}
              </PasscodeContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
