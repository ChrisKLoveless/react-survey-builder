import React from 'react';
import '../index.css';
import Header from './Header';
import SurveyControl from './SurveyControl';
import SignIn from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <hr/>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<SurveyControl />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
