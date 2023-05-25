import { IoIosArrowBack } from 'react-icons/io';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './bookingpage.css';


const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBackClick = () => {
    // Handle the back button click event
    //creating the function later
  };

  const selectedService = "الخدمة المختارة"; // Has to be replace with the dynamic value from the previous page

  return (
    <div>
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
            <span style={{ fontSize: '24px', marginLeft: '5px', stroke: '0.5px' }}>رجوع</span>
          </button>
        </div>
        <div
          className="navbar-right"
          style={{
            position: 'absolute',
            top: '85px',
            right: '40px',
            color: '#4E4766',
            fontSize: '32px',
            stroke: '0.5px',
          }}
        >
          بيشنت هاب
        </div>
        
        
      </div>
    </nav>
    <div className='page'>
<div
          className="selected-service"
          style={{
            position: 'absolute',
            top: '320px',
            right: '40px',
            color: '#4E4766',
            fontSize: '25px',
            stroke: '1.0px',
          }}
        >
          {selectedService}
        </div>
        <div
          className="additional-text"
          style={{
            position: 'absolute',
            top: '350px',
            right: '40px',
            color: '#4E4766',
            fontSize: '18px',
          }}
        >
         قم بالتأكد من التواريخ المتاحة و احجز الموعد و الوقت الذي يناسبك
        </div>
        <hr
          className="divider"
          style={{
            position: 'absolute',
            top: '380px',
            right: '40px',
            width: '600px',
            borderTop: '1px solid #4E4766',
          }}
        />


<div
          className="selected-service"
          style={{
            position: 'absolute',
            top: '340px',
            right: '700px',
            color: '#4E4766',
            fontSize: '25px',
            stroke: '1.0px',
          }}
        >
         تفاصيل الخدمة
        </div>
        

      <hr
          className="divider"
          style={{
            position: 'absolute',
            top: '380px',
            right: '700px',
            width: '200px',
            borderTop: '1px solid #4E4766',
          }}
        />
        
        <div
        className="calendar-container"
        style={{
          position: 'absolute',
          top: '470px',
          right: '40px',
          width: '350px',
          height: '300px',
        }}
      >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd MMMM yyyy"
          dayClassName={(date) => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
          customInput={<CustomInput />}
          calendarClassName="custom-calendar"
        />
      </div>


    </div>

    </div>
    
  );
};

const CustomInput = ({ value, onClick }) => (
  <button className="custom-input" onClick={onClick}>
    {value || 'Select Date'}
  </button>
);

export default BookingPage;
