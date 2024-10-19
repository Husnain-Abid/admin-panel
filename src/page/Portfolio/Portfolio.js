import React, { useState } from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Portfolio.css';

export default function Portfolio() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  const cardsData = [
    { img: "p_1", title: "Chungiyoo", des: "We Make A Portfolio Website Design For A Germany based Art Director", link: "https://chungiyoo.com/", category: "Web Design" },
    { img: "p_2", title: "Natalinanoel", des: "Build an exceptional online store for premium clothing brand.", link: "https://hoo.be/natalinanoel", category: "Web Design" },
    { img: "p_3", title: "AmnaIsmail", des: "Establish a standout e-commerce platform for your luxury clothing brand.", link: "https://amnaismail.com", category: "Dashboard" },
    { img: "p_4", title: "Eon Health", des: "We Build the Eon Health Care Website: Redefining Patient Experience with Advanced Solutions.", link: "https://eonhealth.com/", category: "Web Design" },
    { img: "p_5", title: "Breshna", des: "We Designed This Space: Empowering You to Build and Showcase Your Unique Games.", link: "https://breshna.io/s", category: "Web Design" },
    { img: "p_6", title: "Tashu Distribution", des: "We Developed This Shop: Uncover Fashionable, Quality Women's Apparel for Every Moment.", link: "http://tashudistribution.com/", category: "UI Kits" }
  ]

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === 'All'
    ? cardsData
    : cardsData.filter(card => card.category === selectedCategory);

  return (
    <>
      <Layout>
        <div className='portfolio'>

          <div class="portfolio-header">
            <h1>PORTFOLIO</h1>
            <p>Transforming Your Concepts into Concrete Achievements.</p>
          </div>


          <nav className='portfolio-nav'>
            <ul>
              <li>
                <a
                  href="#"
                  className={selectedCategory === 'All' ? 'active' : ''}
                  onClick={() => handleCategoryChange('All')}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={selectedCategory === 'Web Design' ? 'active' : ''}
                  onClick={() => handleCategoryChange('Web Design')}
                >
                  Web Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={selectedCategory === 'Mobile App' ? 'active' : ''}
                  onClick={() => handleCategoryChange('Mobile App')}
                >
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#"
                  className={selectedCategory === 'Dashboard' ? 'active' : ''}
                  onClick={() => handleCategoryChange('Dashboard')}
                >Dashboard</a>
              </li>
              <li>
                <a href="#"
                className={selectedCategory === 'UI Kits' ? 'active' : ''}
                onClick={() => handleCategoryChange('UI Kits')}                
                >UI Kits</a>
              </li>
            </ul>
          </nav>



          <div className='grid'>

            {filteredCards.map((card, index) => (
              <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className='portfolio-card'>
                <div key={index} className='portfolio-card'>
                  <div className='portfolio-img'>
                    <img src={`${imgRoute}/${card.img}.jpg`} alt={card.title} />
                  </div>
                  <div className='portfolio-content'>
                    <h3>{card.title}</h3>
                    <p>{card.des}</p>
                  </div>
                </div>
              </a>
            ))}

          </div>


        </div>
      </Layout>
    </>
  )
}
