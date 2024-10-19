import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Service.css';
import { useNavigate } from 'react-router-dom';

export default function Service() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  const navigate = useNavigate();

  const handleNav = (id) => {  
    // navigate(`/service-detail/${id}`)
    window.open(`/service-detail/${id}`, '_blank');  
  }


  return (
    <>
      <Layout>
        <div className='service'>


          <div className='service-box'>

            <div className='services-intro'>
              <h1> OUR SERVICES </h1>
              <p>Our software house offering the best quality IT services & solutions. We have the best team of experienced web developers & graphic designers. </p>
            </div>

            <div className='main-serices-box'>

              <div className='service-col-1'>
                <div className='service-card' onClick={()=>handleNav("digital-marketing")}>
                  <img src={`${iconRoute}/grow.svg`} alt='icon' />
                  <h1>Digital Marketing</h1>
                  <p>The world is currently online,
                    as a brand or company in
                    order to reach more
                    customers as possible with
                    digital marketing.</p>
                </div>

                <div className='service-card' onClick={()=>handleNav("graphic-designing")}>
                  <img src={`${iconRoute}/graphic.svg`} alt='icon' />
                  <h1>Graphic Designing</h1>
                  <p>Graphic Designing is an
                    identity that generates results
                    that exceed expectations. For
                    this, we will offer you the best
                    quality creations.</p>
                </div>
              </div>

              <div className='service-col-2'>
                <div className='service-card' onClick={()=>handleNav("web-development")}>
                  <img src={`${iconRoute}/website.svg`} alt='icon' />
                  <h1>Web Development</h1>
                  <p>A website is a central tool for
                    the visibility of a business on
                    the Internet. Dynamic
                    Developers Offers the Best
                    quality Websites.</p>
                </div>

                <div className='service-card' onClick={()=>handleNav("app-development")}>
                  <img src={`${iconRoute}/android.svg`} alt='icon' />
                  <h1>App Development</h1>
                  <p>A dedicated application
                    makes it possible to improve
                    the visibility of brands and to
                    improve your company's
                    business processes.</p>
                </div>

                <div className='service-card'  onClick={()=>handleNav("crm-software")}>
                  <img src={`${iconRoute}/crm.svg`} alt='icon' />
                  <h1>CRM Software</h1>
                  <p>Now a days CRM is the most important approach
                    to manage a company's interaction with potential
                    clients. We are the best CRM software and website
                    development company .</p>
                </div>

              </div>

              <div className='service-col-1'>

                <div className='service-card' onClick={()=>handleNav("ui-design")}>
                  <img src={`${iconRoute}/uiux.svg`} alt='icon' />
                  <h1>UI/UX DESIGN</h1>
                  <p>Blend aesthetics with user-friendly
                    functionality for designs that stand out.</p>
                </div>

                <div className='service-card' onClick={()=>handleNav("blockchain-development")}>
                  <img src={`${iconRoute}/blockchain.svg`} alt='icon' />
                  <h1>Blockchain Development</h1>
                  <p>Explore innovative decentralized solutions that bring a fresh perspective to your business.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Layout>
    </>
  )
}
