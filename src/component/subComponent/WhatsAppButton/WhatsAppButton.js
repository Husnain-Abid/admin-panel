import React from 'react';
import { motion } from 'framer-motion'; // For animation
import './WhatsAppButton.css'; // Import custom styles

const WhatsAppButton = () => {
  return (
    <motion.a 
      href="https://wa.me/923026666400?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      className="whatsapp-button"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
        alt="Chat with us on WhatsApp" 
        className="whatsapp-icon"
      />
    </motion.a>
  );
};

export default WhatsAppButton;


