import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { IoIosArrowBack } from "react-icons/io";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React, { useState } from "react";
import dayjs from "dayjs";
import { useNavigate, useLocation } from "react-router-dom";
import "./bookingpage.css";

const BookingPage = () => {
  const [selectedDate, setPickedDate] = useState(null);
  const currentDate = dayjs().startOf("day");
  const navigate = useNavigate();
  const location = useLocation();

  const handleDateChange = (date) => {
    const dayjs = require("dayjs");
    const selectedDayOfWeek = dayjs(date).day();
    const isFridayOrSaturday =
      selectedDayOfWeek === 5 || selectedDayOfWeek === 6;
    if (isFridayOrSaturday) {
      setPickedDate(date.toDate());
      setSelectedTime("");
    } else {
      setPickedDate(date.toDate());
    }
    // if (isFridayOrSaturday) {
    //   setPickedDate(date.toDate());
    //   setSelectedTime('');
    //   return;
    // }

    // setPickedDate(date.toDate());
  };

  const startDate = dayjs("2023-07-01");
  const endDate = dayjs("2024-07-1");
  const availableDates = generateDateRange(startDate, endDate);

  function generateDateRange(start, end) {
    const dates = [];
    let currentDate = start;

    while (currentDate.isBefore(end)) {
      dates.push(currentDate.toISOString().substr(0, 10));
      currentDate = currentDate.add(1, "day");
    }

    return dates;
  }

  const handleBackClick = () => {
    navigate("/");
  };
  const availableTimes = [
    "9:00 صباحًا",
    "10:00 صباحًا",
    "11:00 صباحًا ",
    "12:00 ظهرًا",
  ];
  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleBookingConfirmation = () => {
    if (selectedTime && selectedDate) {
      console.log("Booking confirmed!");
      navigate("/booking/confirmation", {
        state: {
          selectedService: location.state?.selectedService,
          selectedDate: selectedDate,
          selectedTime: selectedTime,
        },
      });
    } else {
      console.log("Please select a date and time.");
    }
  };

  const selectedService = location.state?.selectedService;
  const isDateAvailable = availableDates.includes(
    selectedDate?.toISOString().substr(0, 10)
  );
  const minSelectableDate = currentDate.add(1, "day").startOf("day");
  const isBookingAvailable = isDateAvailable && selectedTime;
  console.log("isDateAvailable:", isDateAvailable);
  console.log("selectedDate:", selectedDate);

  return (
    <div className="page">
      <div>
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-left">
              <button
                className="back-button"
                onClick={handleBackClick}
              >
                <IoIosArrowBack
                  />
                <span
                
                >
                  رجوع
                </span>
              </button>
            </div>
            <div
              className="navbar-right"
              
            >
              PatientHub
            </div>
          </div>
        </nav>
        <div className="thebody">
          <div className="thepody1item">
          <div
            className="additional-text"
            
          >
            قم بالتأكد من التواريخ المتاحة و احجز الموعد و الوقت الذي يناسبك
          </div>
          <hr className="divider"
             />
                <div className="date">

                  <div className="calendar-container">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        minDate={minSelectableDate}
                        renderInput={(params) => <CustomInput {...params} />}
                        />
                    </LocalizationProvider>
                    {!isDateAvailable &&
                      selectedDate &&
                      (dayjs(selectedDate).day() === 5 ||
                      dayjs(selectedDate).day() === 6) && (
                        <div
                        className="error-message"
                        style={{
                          position: "absolute",
                          top: "100%",
                          padding: "10px",
                          fontSize: "20",
                          color: "red",
                        }}
                        >
                          هذا الموعد غير متاح قم بالتأكد من التواريخ المتاحة الاخرى
                        </div>
                      )}
                  </div>
                  <div className="available-times">
                    <div className="time-slots">
                      {availableTimes.map((time, index) => (
                        <div
                        key={time}
                        className={`time-slot ${
                          selectedTime === time ? "selected" : ""
                        }`}
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
              </div>
           </div>
           <div className="thebody2item">

          <div
            className="selected-service"
            >
            تفاصيل الخدمة: {selectedService}
          </div>
          <hr
            className="divider"
            
            />
            
          {isDateAvailable && selectedDate && (
            <div
            className="selected-date"
            
            >
              تاريخ الحجز:- {dayjs(selectedDate).format("YYYY-MM-DD")}
            </div>
          )}
          {isDateAvailable && selectedDate && (
            <div
              className="booking-field"
              
            >
              <label className="booking-label">
                وقت الحجز:-
                {selectedTime ? selectedTime : "لم يتم اختيار الوقت"}{" "}
              </label>
            </div>
          )}
          {isBookingAvailable && (
            <div className="booking-confirmation">
              <button
                type="button"
                className="t4"
                onClick={handleBookingConfirmation}
              >
                اكد الحجز{" "}
              </button>
            </div>
          )}
          </div>

          
        </div>
      </div>
    </div>
  );
};

const CustomInput = ({ value, onClick }) => (
  <button className="custom-input" onClick={onClick}>
    {value || "Select Date"}
  </button>
);

export default BookingPage;
