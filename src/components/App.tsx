import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../globalstyle";
import "./App.css";
import MyPage from "./Main/MyPage";
import GroupPage from "./Main/GroupPage";

import OAuth2RedirectHandler from "../components/oauth2/OAuth2RedirectHandler";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/group" element={<GroupPage />} />
          <Route
            path="/oauth2/redirect"
            element={OAuth2RedirectHandler}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
