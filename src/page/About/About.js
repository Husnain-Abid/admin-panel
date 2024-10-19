import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './About.css';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const imgRoute = ASSET_PATHS.IMG_URL
    const iconRoute = ASSET_PATHS.ICON_URL
const navigate = useNavigate();

    return (
        <>
            <Layout>
                <div className="about-us">

                    <div className='about-seciton-1'>
                        <div className='content'>
                            <h1>Symbol of
                                Quality
                                work</h1>
                        </div>

                        <div className='image'>
                            <img src={`${iconRoute}/aboutLogo.svg`} alt='img_1' />
                        </div>

                    </div>

                    <div className='about-seciton-2'>
                        <div className='about-description'>
                            <h1>About Us</h1>
                            <p>MustTech Solutions is a well-recognized global software services provider. Established in 2023, We devotedly operate with a synergistic
                                approach and core of setting a benchmark of excellence and perfection in providing enterprise-grade custom software solutions to meet your digital branding needs in any industry.</p>
                            <p>In addition, we have developed a full-fledged offshore outsourcing division to provide IT services to clients worldwide through dedicated resources.</p>
                            <p className='p3'>We stand ready to build a project to perfection using best industry practices and contemporary technology stack.</p>
                        </div>

                        <div className='discription-box'>
                            <div className='mission-description'>
                                <h1>Mission</h1>
                                <p>Our mission is to support business development and growth through
                                    unique and innovative technology solutions and services.</p>
                            </div>
                            <div className='about-description'>
                                <h1>Vision</h1>
                                <p>Our vision is to excel in innovative technological developments and to set a benchmark of excellence in providing IT solutions for global clients.</p>
                            </div>

                        </div>

                    </div>

                    <div className='about-seciton-3'>
                        <h2>CO FOUNDER </h2>

                        <div className='ceo-section'>
                            <div className='ceo-img'>
                                <img src={`${iconRoute}/ceo.svg`} alt='img_1' />
                                {/* <img src={`${iconRoute}/test.png`} alt='img_1' /> */}
                            </div>

                            <div className='ceo-contact'>
                                <h1>Armash Ata</h1>
                                <h5>CHEIF EXECUTIVE OFFICIER</h5>
                                <p>Armash Ata, as a Co-founder of MustTech, has been a guiding force in shaping the company's trajectory. With a
                                    rich background and expertise in Project Management, Armish has played a crucial role in MustTech evolution
                                    since its inception.
                                </p>
                                <p>In his capacity as a Co-founder, Armash has been instrumental in steering the company towards success. His strategic
                                    insights and hands-on approach have contributed to MustTech growth.
                                </p>
                                <h4>MUSTTECH SOLUTIONS</h4>
                            </div>

                        </div>

                        <div className='team-section'>
                            {/* <div className='team-images'>

                                <h2>OUR TEAM </h2>
                                <div className='team-img'>
                                    <img src={`${iconRoute}/members.svg`} alt='img_1' />
                                    <img src={`${iconRoute}/members.svg`} alt='img_1' />
                                </div>
                                <div className='team-img'>
                                    <img src={`${iconRoute}/members.svg`} alt='img_1' />
                                    <img src={`${iconRoute}/members.svg`} alt='img_1' />
                                </div>


                            </div> */}

                            <div className='team-contact'>

                                <h1>We Look on Quality!</h1>
                                <ul>
                                    <li> 500+ Satisfied Overseas Clients </li>
                                    <li>  A Pool of Diversified Skills-Set Professionals </li>
                                    <li>  Highly Reliable Infrastructure and Back-Up Resources </li>
                                    <li>  Dedicated Resources to Fit your Project Demands</li>
                                    <li>  Premium Quality with Exceptional Value for Money</li>
                                </ul>

                                <div className='team-btn'>
                                    {/* <button className='btn-1'>Request A Call</button> */}
                                    <button className='btn-2' onClick={()=>navigate("/contact")}>Quick Quote</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </Layout>

        </>
    )
}
