import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IoIosArrowBack } from 'react-icons/io';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { availableDates } from "./availabledates";
import './bookingpage.css';
const BookingPage = () => {
  const [selectedDate, setPickedDate] = useState(null);
  // const availableDates = 
  //  ['2023-06-23', '2023-06-25', '2023-06-28'];
  const currentDate = dayjs().startOf('day');

  const handleDateChange = (date) => {
    setPickedDate(date);
  };

  const handleBackClick = () => {
    
  };

  const selectedService = "الخدمة المختارة"; // Replace with the dynamic value from the previous page
  const isDateAvailable = availableDates.includes(selectedDate?.toISOString().substr(0, 10));
  const minSelectableDate = currentDate.add(1, 'day').startOf('day'); 

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
      <div className="page">
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
          تفاصيل الخدمة: {selectedService}
        </div>
        <hr
          className="divider"
          style={{
            position: 'absolute',
            top: '380px',
            right: '700px',
            width: '300px',
            borderTop: '1px solid #4E4766',
          }}
        />
        {isDateAvailable && selectedDate && (
          <div
            className="selected-date"
            style={{
              position: 'absolute',
              top: '410px',
              left: '380px',
              color: '#4E4766',
              fontSize: '18px',
            }}
          >
                تاريخ الحجز: {dayjs(selectedDate).format('YYYY-MM-DD')}

          </div>
        )}

        <div
          className="calendar-container"
          style={{
            position: 'absolute',
            top: '400px',
            right: '40px',
            width: '200px',
            height: '100px',
            background: 'white',
            color: '#4E4766',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              minDate={minSelectableDate}
              renderInput={(params) => <CustomInput {...params} />}
           
                   />
          </LocalizationProvider>
          {!isDateAvailable && selectedDate && (
            <div className="error-message" style={{
              position:'absolute',
              top:'100%',
              Padding:'10px',
              color:'red',

              
               }}>
             هذا الموعد غير متاح قم بالتأكد من التواريخ المتاحة الاخرى
            </div>
          )}
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
