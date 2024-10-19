import React from 'react'
import ASSET_PATHS from '../../constant'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const iconRoute = ASSET_PATHS.ICON_URL
  const imgRoute = ASSET_PATHS.IMG_URL

  const navigate = useNavigate()

  const handleNav = (id) => {  
    // navigate(`/service-detail/${id}`)
    window.open(`/service-detail/${id}`, '_blank');  
  }

  return (
    <>

      <div className='main-footer'>
        <div className='footer'>

          <div className='logo'>
            <img src={`${iconRoute}/logo.svg`} alt='logo' />
          </div>

          <div className='offer'>
            <h4>WE OFFER</h4>
            <ul>
              <li onClick={()=>handleNav("web-development")}>Web Development</li>
              <li onClick={()=>handleNav("app-development")}>App Development</li>
              <li onClick={()=>handleNav("ui-design")}>UI/UX DESIGN</li>
              <li onClick={()=>handleNav("blockchain-development")}>Blockchain Development</li>
              <li onClick={()=>handleNav("crm-software")}>CRM Software</li>
              <li onClick={()=>handleNav("graphic-designing")}>Graphic Design</li>
            </ul>
          </div>

          <div className='offer'>
            <h4>PAGES</h4>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/contact'>Contact Us</Link> </li>
              <li><Link to='/about'>About Us</Link></li>
            </ul>
          </div>

          <div className='offer'>
            <h4>SOCIALS</h4>
            <div className='socail'>
              <Link target='_blank' to="https://www.linkedin.com/company/musttech-solutions/posts/?feedView=all"> <img src={`${iconRoute}/linkIn.svg`} alt='logo' /></Link>
              <Link target='_blank' to="https://www.instagram.com/musttech_01/?igsh=MzcwYnQxeXBja3Zi"> <img src={`${iconRoute}/insta.svg`} alt='logo' /> </Link> 
              <Link target='_blank' to="https://www.facebook.com/people/MustTech-Solutions/61559553398873/?mibextid=ZbWKwL"> <img src={`${iconRoute}/facebook.svg`} alt='logo' /> </Link>
            </div>
            <ul>
              <li className='icon'>
                <img src={`${iconRoute}/map.svg`} alt='logo' />
                <span>Model Town, C-Block Lahore Pakistan</span>
              </li>
              <li className='icon'>
                <img src={`${iconRoute}/phone.svg`} alt='logo' />
                <span>+92 302-6666400</span>
              </li>
              <li className='icon'>
                <img src={`${iconRoute}/email.svg`} alt='logo' />
                <span> <a href='mailto:info@musttechsolutions.com' target='_blank'>info@musttechsolutions.com </a> </span>
              </li>
            </ul>
          </div>

        </div>

        <div className='footer-space'>

        </div>

      </div>

    </>
  )
}
