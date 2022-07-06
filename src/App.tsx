import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "lyatom-cms";
import data from "./data/";

import { HomeScreen, ProjectScreen } from "./components/screens/";

function App() {

  return (
    <>
      <AdminPanel
        config={data}
        githubToken={process.env.REACT_APP_GH_TOKEN_PERSONAL!}
      />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/project" element={<ProjectScreen />} />
      </Routes>
    </>
  );
}

export default App;
