import React, { useState } from 'react';
import ASSET_PATHS from '../../constant';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  const iconRoute = ASSET_PATHS.ICON_URL;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [show, setShow] = useState(false)
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/career' },
  ];

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={`${iconRoute}/logo.svg`} alt="logo" />
          </Link>
        </div>

        <div className="nav-links">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={() => setShow(!show)}
          ></i>

          <ul className={`${show ? 'show' : ''}`}>
            {menuItems.map((item, index) => (
               <li
               key={index}
               onMouseEnter={() => setHoveredIndex(index)}
               onMouseLeave={() => setHoveredIndex(null)}
             >
               <Link
                 to={item.path}
                 className={location.pathname === item.path ? 'active' : ''}
               >
                 {item.name}
               </Link>
               <motion.div
                 className="line"
                 animate={{
                   width: hoveredIndex === index || location.pathname === item.path ? '100%' : '0%',
                 }}
                 initial={{ width: '0%' }}
                 transition={{ duration: 0.5 }}
               />
             </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
