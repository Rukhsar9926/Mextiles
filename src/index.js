import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { HeroSec1 } from './Component/HeroSec1';
import Section3 from './Component/Section3';
import Faqs from './Component/Faqs';
import Carrer from './Component/Carrer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>} /> 
  <Route path='/heroSec1' element={<HeroSec1/>}/>
  <Route path='/Section3' element={<Section3/>}/>
  <Route path='/faqs' element={<Faqs/>}/>
  <Route path='/Carrer' element={<Carrer/>}/>
  <Route path='/faqs' element={<Faqs/>}/>

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
