import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../globalstyle";
import "./App.css";
import MyPage from "./Main/MyPage";
import Modal from "./modal";
import GroupPage from "./Main/GroupPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route path="/model-tmp" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
