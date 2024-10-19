import React from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './ServiceDetail.css';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function ServiceDetail() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL
  const serviceRoute = ASSET_PATHS.SERVICE_URL
const navigate = useNavigate();


  const { slug } = useParams();

  console.log("slug", slug);



  const serviceData = [
    {
      id: 3, image: 's1', heading: "Web Development", slug: "web-development",
      para: "We build web solutions to help to execute your business operations smooth, fast and efficiently. From Web applications to MVP, portals, websites, and custom software development, we know technologies and what will be right for you. We spend our time and energies like a pro to develop and implement modern solutions for blue-chip corporate clients, fresh-faced start-ups or local SMEs. Our expertise lies in PHP, .Net, WordPress, Magento, JavaScript, AJAX, JQuery, React, Mongo DB, Agular.JS, Node.js, and Ruby on Rails to name a few."
    },
    {
      id: 1, image: 's2', heading: "Digital Marketing", slug: "digital-marketing",
      para: "Boost your online presence with our comprehensive digital marketing services. Our expert team crafts strategies that enhance visibility, drive organic traffic, and maximize ROI through targeted advertising and engaging content. We focus on continuous optimization, analyzing data to improve results, and provide transparent insights to keep you informed. Partner with us to elevate your brand and achieve your business goals. Contact us today to get started!"
    },
    {
      id: 6, image: 's3', heading: "UI/UX DESIGN", slug: "ui-design",
      para: "Elevate your digital presence with our expert UI/UX design services. We create intuitive, user-centered designs that enhance functionality and drive engagement. Starting with a deep understanding of your brand and goals, we craft seamless interactions and stunning interfaces that align with your objectives. Our process includes wireframing, prototyping, and final design, prioritizing usability, accessibility, and responsive design to deliver a superior user experience."
    },
    {
      id: 2, image: 's4', heading: "Graphic Designing", slug: "graphic-designing",
      para: "Elevate your brand with our expert graphic design services. We create visually compelling designs that effectively communicate your message and resonate with your audience. From stunning logos to engaging social media graphics, we ensure consistency and impact across all platforms. Our services include branding, print, digital design, and more, strategically crafted to drive engagement and enhance brand recognition. Let us help you make a strong visual statement that aligns with your vision."
    },
    {
      id: 4, image: 's5', heading: "App Development", slug: "app-development",
      para: "Turn your ideas into reality with our cutting-edge app development services. We create high-performance, user-friendly mobile and web apps tailored to your business needs. From native iOS and Android apps to cross-platform solutions, we design and develop custom applications that are visually appealing, intuitive, and secure. Our end-to-end process includes planning, design, coding, testing, deployment, and post-launch support, ensuring your app stays optimized and up-to-date."
    },
    {
      id: 7, image: 's7', heading: "Blockchain Development", slug: "blockchain-development",
      para: "Unlock the power of blockchain with our expert development services. We create secure, transparent, and efficient blockchain solutions tailored to your business needs, including custom blockchain architectures, smart contracts, dApps, and tokenization. Our process starts with understanding your goals, then designing and developing solutions that enhance efficiency, security, and transparency. We work with platforms like Ethereum and Hyperledger, ensuring your blockchain solution is scalable and future-proof."
    },
    {
      id: 5, image: 's6', heading: "CRM Software", slug: "crm-software",
      para: "Streamline customer relationships and drive growth with our custom CRM software development services. We create user-friendly CRM solutions that centralize customer data, automate sales processes, and enhance customer satisfaction. Key features include contact management, sales and marketing automation, lead tracking, customer support, and robust analytics. Our scalable CRM solutions are tailored to your business needs and integrate seamlessly with other tools, ensuring ease of use and effective adoption."
    }
  ]

  // Find the service data that matches the param id
  const service = serviceData.find(service => service.slug === slug);

  console.log(service);


  if (!service) {
    return <p>Service not found</p>;
  }


  return (
    <>
      <Layout>

        <div className='service-detail'>

          <div className='img-part'>

            <img src={`${serviceRoute}/${service.image}.png`} alt={service.heading} />

          </div>

          <div className='contact-part'>
            <h2>{service.heading}</h2>
            <p>
              {service.para}
            </p>
          </div>



          {
            slug === "web-development" && (

              <>
                <div className='tech-logo'>
                  <div className='logos'>
                    <div className='box'>
                      <img src={`${serviceRoute}/si1.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si2.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si3.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si4.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si5.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si6.svg`} alt="image is not found" />
                    </div>
                  </div>

                  <div className='logos'>
                    <div className='box'>
                      <img src={`${serviceRoute}/si7.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si8.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si9.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si10.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si11.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si12.svg`} alt="image is not found" />
                    </div>
                  </div>
                </div>

                <div className='tech-logo-sm'>
                  <div className='logos'>
                    <div className='box'>
                      <img src={`${serviceRoute}/si1.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si2.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si3.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si4.svg`} alt="image is not found" />
                    </div>
                  </div>

                  <div className='logos'>
                    <div className='box'>
                      <img src={`${serviceRoute}/si5.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si6.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si7.svg`} alt="image is not found" />
                    </div>
                    <div className='box'>
                      <img src={`${serviceRoute}/si8.svg`} alt="image is not found" />
                    </div>
                  </div>


                  {
                    slug === "web-development" && (
                      <div className='logos'>

                        <div className='box'>
                          <img src={`${serviceRoute}/si9.svg`} alt="image is not found" />
                        </div>
                        <div className='box'>
                          <img src={`${serviceRoute}/si10.svg`} alt="image is not found" />
                        </div>
                        <div className='box'>
                          <img src={`${serviceRoute}/si11.svg`} alt="image is not found" />
                        </div>
                        <div className='box'>
                          <img src={`${serviceRoute}/si12.svg`} alt="image is not found" />
                        </div>
                      </div>
                    )

                  }

                </div>
              </>


            )

          }


          <div className='redirect'>
            <button onClick={()=>navigate("/contact")}>Get A Quote</button>

          </div>


        </div>

      </Layout>
    </>
  )
}
