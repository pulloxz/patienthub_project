import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const BookingPage = () => {
  const handleBackClick = () => {
    // Handle the back button click event
  };

  const selectedService = "الخدمة المختارة"; // Has to be replace with the dynamic value from the previous page

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button
            className="back-button"
            onClick={handleBackClick}
            style={{
              background: 'transparent',
              border: 'none',
              position: 'absolute',
              left: '95px',
              top: '85px',
              display: 'flex',
              alignItems: 'center',
              color: '#4E4766',
              stroke: '0.5px',
              fontSize: '20px',
            }}
          >
            <IoIosArrowBack style={{ width: '11px', height: '20px', marginRight: '5px' }} />
            <span style={{ fontSize: '36px', marginLeft: '5px', stroke: '0.5px' }}>رجوع</span>
          </button>
        </div>
        <div
          className="navbar-right"
          style={{
            position: 'absolute',
            top: '85px',
            right: '85px',
            color: '#4E4766',
            fontSize: '36px',
            stroke: '0.5px',
          }}
        >
          بيشنت هاب
        </div>
        <div
          className="selected-service"
          style={{
            position: 'absolute',
            top: '335px',
            right: '85px',
            color: '#4E4766',
            fontSize: '36px',
            stroke: '1.0px',
          }}
        >
          {selectedService}
        </div>
        <div
          className="additional-text"
          style={{
            position: 'absolute',
            top: '385px',
            right: '85px',
            color: '#4E4766',
            fontSize: '24px',
          }}
        >
         قم بالتأكد من التواريخ المتاحة و احجز الموعد و الوقت الذي يناسبك
        </div>
      </div>
    </nav>
  );
};

export default BookingPage;
