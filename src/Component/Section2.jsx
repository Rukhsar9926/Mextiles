import React from 'react'
import img1 from '../Assets/No_Nails_01.webp'
import img2 from '../Assets/plane.webp'
import face from '../Assets/face.webp'
import vedio from '../Assets/vedio.mp4'


const Section2 = () => {
  return (
    <>
        <div className='container mt-5'>

        <div className='row d-flex'>

            <div className='col-md-4'>  

                <img src={img1} alt=""  style={{width:'120px'}}/>
                <h6 className='head2'>No nails needed</h6>
                <p className='head3'>Our frames stick to any wall</p>
            </div>


            <div className='col-md-4' >
                <img src={img2} alt=""  style={{width:'120px'}}/>
                <h6 className='head2'>Free worldwide shipping!</h6>
                <p className='head3'>Our frames stick to any wall</p>
            </div>



            <div className='col-md-4'>
                <img src={face} alt="" style={{width:'120px'}}/>
                <h6 className='head2'>Satisfaction guaranteed</h6>
                <p className='head3'>Not satisfied? Get a full refund</p>
            </div>
            </div>

        </div>


        <div className='container mt-5'>
            
            <div className='row d-flex sec3'>
        
                <div className='col-md-5  cl1'>
                    <h4 className='para1'>The magic frame that sticks to any surface</h4>
                    <p className='para2'>Get your photos in stylish frames that stick directly to <br />
                        your wall and leave no damage behind!</p>

                </div>

                <div className='col-md-6'>
          
                    <video width="650" height="400" autoPlay>
                        <source src={vedio} type="video/mp4"/>
                    </video>

                </div>

                </div>
               

                

        </div>
 
    </>
  )
}

export default Section2