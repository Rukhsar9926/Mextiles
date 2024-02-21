import React from 'react'
import hero1 from "../Assets/hero-1.webp"
import hero2 from "../Assets/hero-2.webp"
import hero3 from "../Assets/hero-3.webp"
import plane from "../Assets/plane.svg"
import { useNavigate } from 'react-router-dom'




export const HeroSec1 = () => {
  const navigate=useNavigate();
 

  return (
    <>
      <div className='container d-flex justify-content-space-between mt-5'>
        

        <div className='div1 col-md-6 d-flex'>

          <div>
            <img src={hero1} alt="" style={{ width: '200px', border: "1px ", borderRadius: '15px', marginTop: '60px' }} />
          </div>

          <div style={{ marginLeft: '25px' }}>
            <img src={hero2} alt="" style={{ width: '200px', border: "1px ", borderRadius: '15px' }} /> <br /> <br />
            <img src={hero3} alt="" style={{ width: '200px', border: "1px ", borderRadius: '15px' }} />
          </div>
        </div>

<div className='div2 col-md-4' >
          <h1 className='head1'>
            Turn your photos
            into stunning
            wall art
            </h1>

          <p className='para mt-3'>Design beautiful walls filled with memories
            using your favorite photos</p>

            <button onClick={()=>navigate("/Section3")}type="button" class="btn btn-primary btn-lg" className='btn1 mt-3' >Style Your Photos</button>
            <div className='d-flex  justify-content-space-between  mt-3 '>
              <img src={plane} alt="" />
              <h6> Free worldwide shipping!</h6>
            </div>

        </div>

        </div>

 





    </>
  )
}
