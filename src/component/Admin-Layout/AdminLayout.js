import React, { useState } from "react";
import "./AdminPanel.css";
import Aside from "./Aside";

const AdminLayout = ({children}) => {

  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <Aside isSidebarOpen={isSidebarOpen}  />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        
        <header className="header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>Welcome, Admin</h1>
        </header>

        {/* Content Area */}
        <section className="content">
        
          {children}

        </section>
      </div>
    </div>
  );
};

export default AdminLayout;
