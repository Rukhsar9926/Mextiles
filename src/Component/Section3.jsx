import React, { useState } from 'react';
import stars from '../Assets/stars.svg';
import today from '../Assets/today.svg';
import cnet from '../Assets/cnet.svg';
import oprah from '../Assets/oprah.svg';
import stars2 from '../Assets/stars2.svg';
import ReactPlayer from 'react-player';

const Section3 = () => {
  const [showvedio, setshowvedio] = useState(false);
  const vedioID = 'Po5UonzED1s';

  const handleclick = () => {
    // Redirect to the YouTube video URL
    window.location.href = `https://www.youtube.com/watch?v=${vedioID}`;
  };

  return (
    <>
      <div className='container mt-5 sec-4'>
        <h4 className='head5'>Every year, millions of people choose Mixtiles</h4>
        <button onClick={handleclick} type="button" className="btn btn-light btn3">
          <img className="play-icon" src="https://www.mixtiles.com/static/assets/play.b42fe080.svg" alt="Icon" />
          Watch the Video
        </button>

       
      </div>

      <div className='container rating'>
      <div className='container rating'>

<div className='r1 '>
  <img src={stars} alt="" /> 
  <h6>Rated 4.9 on the Appstore</h6>
  <p>Based on 80,000+ Reviews</p>
  </div>

<div className='r2 row2'>
   <img src={today} alt="" />
   <img src={cnet} alt="" />
   <img src={oprah} alt="" />
</div>

<div className='r3 '>
  <img src={stars2} alt="" />
  <h6>Rated 4.9 on the Appstore</h6>
  <p>Based on 80,000+ Reviews</p>


</div>
</div>

      </div>
    </>
  );
};

export default Section3;
