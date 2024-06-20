import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './pages/css/landing.css'; 

import AOS from 'aos';
import $ from 'jquery';
import 'owl.carousel';

AOS.init();
$(document).ready(function() {
 $('.owl-carousel').owlCarousel();
});
//import Login from './pages/Login.tsx'
//import Dashboard from './pages/Dashboard.tsx'
//import Cars from './pages/Cars.tsx'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>,
)
