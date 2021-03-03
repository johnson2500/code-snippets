import React from 'react';
import Navbar from './components/Nav/Navigation'
import Footer from './components/Footer/Footer'
import Layout from './components/LayoutContainer/LayoutContainer'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Layout />
      <Footer />
    </Router>
  );
}

export default App;
