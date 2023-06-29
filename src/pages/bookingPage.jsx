import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IoIosArrowBack } from 'react-icons/io';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from "react-router-dom";


import './bookingpage.css';

const BookingPage = () => {
  const [selectedDate, setPickedDate] = useState(null);
  const currentDate = dayjs().startOf('day');
  const navigate = useNavigate();
  const handleDateChange = (date) => {
    const selectedDayOfWeek = dayjs(date).day();
    const isFridayOrSaturday = selectedDayOfWeek === 5 || selectedDayOfWeek === 6;
  
    if (isFridayOrSaturday) {
      setPickedDate(null);
      setSelectedTime('');
      return;
    }
  
    setPickedDate(date.toDate());
  };

  const startDate = dayjs('2023-07-01');
  const endDate = dayjs('2024-07-1');
  const availableDates = generateDateRange(startDate, endDate);

  function generateDateRange(start, end) {
    const dates = [];
    let currentDate = start;

    while (currentDate.isBefore(end)) {
      dates.push(currentDate.toISOString().substr(0, 10));
      currentDate = currentDate.add(1, 'day');
    }

    return dates;
  }
  

 const handleBackClick = () => {
navigate('/');
  };
  const availableTimes = ['9:00 صباحًا', '10:00 صباحًا', '11:00 صباحًا ', '12:00 ظهرًا'];
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

const handleBookingConfirmation = () => {
    if (selectedTime && selectedDate) {
      console.log('Booking confirmed!');
      navigate('/booking/confirmation',
      {
        state: {
          selectedService: selectedService,
          selectedDate: selectedDate,
          selectedTime: selectedTime
        }
      }
    ); 
    } else {
      console.log('Please select a date and time.');
    }
  };


  const selectedService = "الخدمة المختارة"; // Replace with the dynamic value from the previous page
  const isDateAvailable = availableDates.includes(selectedDate?.toISOString().substr(0, 10));
  const minSelectableDate = currentDate.add(1, 'day').startOf('day'); 
  const isBookingAvailable = isDateAvailable && selectedTime;
return (
    <div className="page">
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
            right: '860px',
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
            right: '860px',
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
    تاريخ الحجز:- {dayjs(selectedDate).format('YYYY-MM-DD')}
  </div>
)}
{isDateAvailable && selectedDate && (
  
  <div className="booking-field" style={{  
    position: 'absolute',
  top: '430px',
  left: '390px',
  marginTop: '10px',
  color: '#4E4766',
  fontSize: '18px', }}>
    <label className="booking-label">
     وقت الحجز:-
    {selectedTime ? selectedTime : 'لم يتم اختيار الوقت'} </label>
  </div>
)}
        <div className="available-times">
        <div className="time-slots">
          {availableTimes.map((time, index) => (
            <div
              key={time}
              className={`time-slot ${selectedTime === time ? 'selected' : ''}`}
              style={{
                top: Math.floor(index / 2) * 50 + 420,
          left: (index % 2) * 150 + 800,
              }}
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </div>
          ))}
        </div>
      </div>
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
              fontSize:'20px',
              color:'red',             
               }}>
             هذا الموعد غير متاح قم بالتأكد من التواريخ المتاحة الاخرى
            </div>




          )}
        </div>
        {isBookingAvailable && (

          <div className="booking-confirmation">

            <button type="button" className="t4" onClick={handleBookingConfirmation}>
اكد الحجز            </button>

          </div>
        )}
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

