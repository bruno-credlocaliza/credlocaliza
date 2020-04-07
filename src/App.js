import React from 'react';
import Routes from "./routes";
import Header from "./components/Header";

import "./styles.css";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => (

  <div className="App">
    <Router>
      <Header/>
      <Routes/>
    </Router>
    {/* <Menu/> */}


  </div>
);

export default App;
