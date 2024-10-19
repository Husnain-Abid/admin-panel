import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import CountUp from "react-countup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import PromotionPopup from '../../component/subComponent/PromotionPopup/PromotionPopup';
import { API_URL } from '../../utils/API_URL';


export default function Home() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

  };

  const navigate = useNavigate()

  const handleNav = (id) => {
    // navigate(`/service-detail/${id}`)
    window.open(`/service-detail/${id}`, '_blank');
  }

  const initialValues = {
    firstName: '',
    email: '',
    phoneNumber: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      console.log('Form data', values);
      const response = await axios.post(`${API_URL}/contact/post`, values);
      console.log(response.data.message);

      // Show a success toast notification
      toast.success(response.data.message);

      // Clear form fields
      resetForm();
    } catch (error) {
      console.error('Error submitting form', error);
      toast.error('There was an error submitting your form.');
    }
  };



  return (
    <>
      <Layout>
        <div className='home'>

          <div className='hero-seciton'>
            <div className='content'>
              <h1>Crafting Digital Excellence Your Vision, <span>
                Our Expertise.
              </span></h1>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Transforming Your Concepts into Concrete Achievements.',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Turning Your Imagination into Tangiable Creations.',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="p"
                speed={50}
                repeat={Infinity}
              />


            </div>

            <div className='image'>
              <img src={`${imgRoute}/img_1.png`} alt='img_1' />
            </div>

          </div>

          <div className='detail-section'>


            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
            >
              <Form className='detail'>
                <div className='title'>
                  <img src={`${iconRoute}/user.svg`} alt='img_1' />
                  {/* <span> Full Name</span> */}
                  <Field type="text" placeholder="Full Name" name="firstName" />

                </div>

                <div className='title'>
                  <img src={`${iconRoute}/email2.svg`} alt='img_1' />
                  {/* <span>Email Address</span> */}
                  <Field type="text" placeholder="Email Address" name="email" />

                </div>

                <div className='title'>
                  <img src={`${iconRoute}/phone3.svg`} alt='img_1' />
                  {/* <span>Phone Number</span> */}
                  <Field type="text" placeholder="Phone Number" name="phoneNumber" />
                </div>

                <div className='btn'>
                  <button type="submit"> Get Started </button>
                </div>

              </Form>

            </Formik>



          </div>

          <div className='about-section'>
            <h1>WHAT WE DO?</h1>
            <div className='about-hero'>

              <div className='about-content'>
                <p>
                  We turn your digital dreams into reality, providing top-tier tech solutions to empower your business and enhance user experiences. Our expertise spans a wide range of services, including web and mobile applications, custom software development, staff augmentation, project management, and social media marketing. With a relentless focus on innovation, we deliver cutting- edge solutions that transform concepts into robust software solutions. Let us be your partner in making your digital dream a reality.
                </p>
              </div>

              <div className='about-image'>
                <img src={`${imgRoute}/img_2.png`} alt='img_2' />
              </div>

            </div>
          </div>

          <div className='completion-section'>

            <div className='box'>
              <img src={`${imgRoute}/check.png`} alt='img_1' />
              {/* <span>100+</span> */}
              <CountUp start={0} end={100} duration={3} suffix="+" />
              <p>PROJECTS COMPLETED</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/rating.png`} alt='img_1' />
              <CountUp start={0} end={100} duration={10} suffix="%" />
              <p>HAPPY CLIENTS</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/git.png`} alt='img_1' />
              <CountUp start={0} end={1000} duration={3} suffix="+" />
              <p>CODE COMMIT</p>
            </div>
            <div className='box'>
              <img src={`${imgRoute}/cycle.png`} alt='img_1' />
              <CountUp start={0} end={500} duration={3} suffix="+" />
              <p>PROJECTS REVIEW</p>
            </div>

          </div>

          <div className='services-section'>

            <div className='our-services'>
              <h1> OUR SERVICES </h1>
              <p>Our software house offering the best quality IT services & solutions. We have the best team of experienced web developers & graphic designers. </p>
            </div>

            <div className='main-serices'>
              <div className='service-col-1'>
                <div className='service-card' onClick={() => handleNav("digital-marketing")}>
                  <img src={`${iconRoute}/grow.svg`} alt='icon' />
                  <h1>Digital Marketing</h1>
                  <p>The world is currently online,
                    as a brand or company in
                    order to reach more
                    customers as possible with
                    digital marketing.</p>
                </div>
              </div>

              <div className='service-col-2'>
                <div className='service-card' onClick={() => handleNav("web-development")}>
                  <img src={`${iconRoute}/website.svg`} alt='icon' />
                  <h1>Web Development</h1>
                  <p>A website is a central tool for
                    the visibility of a business on
                    the Internet. Dynamic
                    Developers Offers the Best
                    quality Websites.</p>
                </div>

              </div>

              <div className='service-col-1'>

                <div className='service-card' onClick={() => handleNav("ui-design")}>
                  <img src={`${iconRoute}/uiux.svg`} alt='icon' />
                  <h1>UI/UX DESIGN</h1>
                  <p>Blend aesthetics with user-friendly
                    functionality for designs that stand out.</p>
                </div>

              </div>
            </div>

            <div className='services-btn'>
              <button className="more-button" onClick={() => navigate("/services")}>
                MORE
              </button>

            </div>

          </div>

          <div className='tech-section' >
            <h1>OUR CORE TECHNALOGIES</h1>
            <div className='tech-hero'>
              <div className='tech-content'>
                <p>MustTech works under various modern technologies for
                  effective, scalable, and future-proof custom software
                  development. Ranging from iOT to AI and even VR, we have
                  had our fair share of expertise in all productive
                  technological projects. Smart factory, smart hospital,
                  smart farms and even iOT security system are part of the
                  iOT world we have explored. Virtual agents, risk assessment
                  and even speech recognition for navigation are part of
                  some projects we have covered under the AI category.
                </p>
              </div>
              <div className='tech-image'>
                <img src={`${imgRoute}/tech.png`} alt='img_2' />
              </div>
            </div>
          </div>

          <div className='review-section '>
            <img src={`${imgRoute}/comment.png`} alt='img_2' />

            <div className='review-carasal'>

              <div style={{ width: '80%', margin: '0 auto' }}>
                <Slider {...settings}>
                  <div>
                    <p>They made an amazing website that not only looks great but is also easy for my users. They mixed my ideas with their skills so
                      well — it went beyond what I hoped for. Till now! My users love the digital experience they created.</p>
                    <span> Daniel.Joe </span>

                    <div className='rating'>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>

                  </div>
                  <div>
                    <p>Their team kept everything on track, hitting all the deadlines and goals. They communicated really well, and when issues popped up, they were quick to solve them.</p>
                    <span> Charlie.William </span>

                    <div className='rating'>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                      <i class="fa fa-star" aria-hidden="true"></i>
                    </div>

                  </div>

                </Slider>
              </div>

            </div>
          </div>

        </div>
      </Layout>

      <PromotionPopup></PromotionPopup>

    </>
  )
}
