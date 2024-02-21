import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <>
    <div className='container mt-5'>
        <div className='footer'>
            <div>
                <h6>About</h6>
                <a href="" onClick={()=>navigate("/faqs")}>FAQs</a> <br /> <br />
                <a href="" onClick={()=>navigate("/Carrer")}>Careers</a> <br /> <br />
                <a href="" onClick={()=>navigate("/faqs")}>Accessibility Statement</a> <br /> <br />
            </div>

            <div>
                <h6>Follow Us</h6>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" >Instagram</a> <br /> <br />
                <a href="https://www.facebook.com/YourPageNameOrID" target="_blank" rel="noopener noreferrer" >Facebook</a> <br /> <br />
                <a href="https://twitter.com/?lang=en-in" target="_blank" rel="noopener noreferrer">Twitter</a> <br /> <br />
            </div>

        </div>
    </div>
    </>
  )
}

export default Footer