import React from 'react'

import { Link, useLocation } from 'react-router-dom';

export default function Aside({ isSidebarOpen }) {

  const androidIcon = `${process.env.PUBLIC_URL}/assest/image/ultrport.png`;

  const location = useLocation();

  const asideItems = [
    { name: 'Dashoboard', path: '/' },
    { name: 'Products', path: '/admin-panel/products' },
    { name: 'Order', path: '/admin-panel/orders' },
    { name: 'Logout', path: '/admin-panel/login' },
  ];


  return (
    <>

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-title">
          <img src={androidIcon} alt="logo" width={"150px"} />

        </div>
        <nav className="sidebar-nav">
          <ul>

            {asideItems.map((item, index) => (
              <>

                <li>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                  >
                    {item.name}
                  </Link>
                </li>

              </>
            )
            )}




          </ul>
        </nav>
      </aside>

    </>
  )
}
