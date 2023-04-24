import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Forms } from "./components/Forms";

function App() {
  return (
    <>
     <BrowserRouter basename="/client">
      <Routes>
        <Route index  element={<Forms />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
