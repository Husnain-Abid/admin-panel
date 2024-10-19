import React, { useState, useEffect } from 'react';
import ASSET_PATHS from '../../../constant';
import { useNavigate } from 'react-router-dom';

const PromotionPopup = () => {
  const [show, setShow] = useState(false);
  const iconRoute = ASSET_PATHS.ICON_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const sessionStart = localStorage.getItem('sessionStart');
    const currentTime = new Date().getTime();
    const sessionDuration = 5 * 60 * 1000; // 30 minutes session duration

    if (!sessionStart || (currentTime - sessionStart) > sessionDuration) {
      // Show the popup if sessionStart is not set or session has expired
      setShow(true);
      // Set sessionStart to current time
      localStorage.setItem('sessionStart', currentTime.toString());
    }
  }, []);



  const handleClose = () => {
    setShow(false)
  };
  const handleOrderNow = () => {
    navigate("/contact");
    setShow(false);
  };

  return (
    <>
      {show && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <button style={styles.closeButton} onClick={handleClose}>
              &times;
            </button>

            <img
              src={`${iconRoute}/promotion.svg`} // Replace with your image path
              alt="Promotion"
              style={styles.promoImage}
            />

            <button style={styles.orderButton} onClick={handleOrderNow}>
              Avail Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  popup: {
    position: 'relative',
    width: '80%',
    maxWidth: '600px',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: 'black',
    cursor: 'pointer',
    zIndex: 1001,
  },
  promoImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  orderButton: {
    position: 'absolute',
    bottom: '10px', // Adjust position from the bottom as needed
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '5px 20px',
    backgroundColor: 'white',
    color: "var(--font-color-1)",
    border: 'none',
    fontWeight: '500',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1001,
  },
};

export default PromotionPopup;
