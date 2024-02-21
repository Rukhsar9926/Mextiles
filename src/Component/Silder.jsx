import React from 'react'
import slider1 from '../Assets/slider1.webp'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slider2 from '../Assets/slider2.webp'
import slider3 from '../Assets/slider3.webp'
import slider4 from '../Assets/slider4.webp'





const Silder = () => {
    const settings = {
        dots: true,
     
        speed: 300,
        infinate: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className='container mt-5 side'>
                <h3>Reviews that made our day</h3>
                <h6>We love seeing your beautiful Mixtiles walls</h6>
            </div>

            <Slider {...settings}>
                {/* Slide 1 */}
                <div className='row d-flex mt-5'>
                    <div className='col-md-4'>
                        <div className='card' style={{ width: '300px' }}>
                            <img src={slider2} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <p className='card-text'>Some quick example text to build on the card title and make up </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className='row d-flex mt-5'>
                    <div className='col-md-4'>
                        <div className='card' style={{ width: '300px' }}>
                            <img src={slider3} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <p className='card-text'>Some quick example text to build on the card title and make up </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className='row d-flex mt-5'>
                    <div className='col-md-4'>
                        <div className='card' style={{ width: '300px' }}>
                            <img src={slider4} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <p className='card-text'>Some quick example text to build on the card title and make up </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide 4 - Your provided card */}
                <div className='row d-flex mt-5'>
                    <div className='col-md-4'>
                        <div className='card' style={{ width: '250px' }}>
                            <img src={slider1} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <p className='card-text'>Some quick example text to build on the card title and make up </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    );
};

export default Silder;