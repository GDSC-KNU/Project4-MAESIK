import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../globalstyle";
import "./App.css";
import MyPage from "./Main/MyPage";
import GroupPage from "./Main/GroupPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/group" element={<GroupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
