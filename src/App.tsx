import React from 'react';
import logo from './logo.svg';
import './app.scss';
import {Route, Routes} from 'react-router-dom';

import { HomeScreen, ProjectScreen } from "./components/screens/"

function App() {
  return (
    <>
    
        <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/project" element={<ProjectScreen />}/>
        </Routes>

    </>
  );
}

export default App;
