import './App.css';
import { HeroSec1 } from './Component/HeroSec1';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Section2 from './Component/Section2';
import Silder from './Component/Silder';
import Section3 from './Component/Section3';
import Footer from './Component/Footer';
import { useEffect, useState } from 'react';
import Dataapi from './Component/Dataapi';
// import Avtar from "./Component/Avtar"



function App() {

  // const [data,setdata]=useState([]);

  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products').then(result=>result.json()).then((resp)=>{
  //     console.log(resp)
  //     setdata(resp)
  //   })
  // })
  return (
  <>
    <Navbar/>
    <div className='container'>
    <HeroSec1/>
    <Section2/>
    <Silder />
    {/* <Dataapi  data={data}/> */}
    <Section3/>
    <Footer/>

    {/* <Avtar/> */}
    </div>
    
    </>
     );
}

export default App;
