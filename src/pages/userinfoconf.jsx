import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";
import "./userinfoconf.css";

const UserInfoConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const selectedService = location.state?.selectedService || "الخدمة المختارة";
  const selectedDate = dayjs(location.state?.selectedDate).format("YYYY-MM-DD");
  const selectedTime = location.state?.selectedTime?.toString();
  const selectedDatetime = `${selectedDate} ${selectedTime}`;

  const [values, setValues] = useState({
    firstname: "",
    secondename: "",
    age: "",
    Location: "",
    phone_number: "",
    dattime: selectedDatetime,
    task: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  let task = "";
  if (selectedService === "تنظيف الاسنان") {
    task = "1";
  } else if (selectedService === "تبييض اسنان") {
    task = "2";
  } else if (selectedService === "قلع اسنان") {
    task = "3";
  }

  const validateForm = () => {
    const errors = {};

    // Validation rules
    if (!values.firstname || values.firstname.length < 2) {
      errors.firstname = "الاسم يجب أن يتكون من حرفين على الأقل";
    }

    if (!values.secondename || values.secondename.length < 2) {
      errors.secondename = "اسم الاب يجب أن يتكون من حرفين على الأقل";
    }

    if (!values.age || parseInt(values.age) < 2) {
      errors.age = "العمر يجب أن يحتوي على رقمين على الأقل";
    }

    if (!values.Location) {
      errors.Location = "العنوان مطلوب";
    }

    if (!values.phone_number || !/^07[0-9]{9}$/.test(values.phone_number)) {
      errors.phone_number =
        "يجب أن يكون رقم الهاتف مبدوء بـ 07 ويحتوي على 11 رقم";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formdata = new FormData();
      formdata.append("PatientFirstName", values.firstname);
      formdata.append("PatientLastName", values.secondename);
      formdata.append("Age", values.age);
      formdata.append("Location", values.Location);
      formdata.append("PatientPhoneNumber", values.phone_number);
      formdata.append("AppointmentDate", values.dattime);
      formdata.append("Task", task);

      axios
        .post("https://localhost:3001/api/Appointment/appointments", formdata)
        .then((response) => {
          console.log(response.data);
          setBookingSuccess(true);
          setTimeout(() => {
            navigate("/");
          }, 6000);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleBackClick = () => {
    navigate("/booking");
  };

  return (
    <div className="page">
       <nav className="navbar">
         <div className="navbar-container">
          <div className="navbar-left">
             <button
              className="back-button"
              onClick={handleBackClick}
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                left: "95px",
                top: "85px",
                display: "flex",
                alignItems: "center",
                color: "#735634",
                fontSize: "20px",
              }}
            >
              <IoIosArrowBack
                style={{ width: "11px", height: "20px", marginRight: "5px" }}
              />
              <span
                style={{ fontSize: "24px", marginLeft: "5px", stroke: "0.5px" }}
              >
                رجوع
              </span>
            </button>
          </div>
          <div
            className="navbar-title"
            style={{
              position: "absolute",
              top: "85px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#735634",
              fontSize: "32px",
            }}
          >
            تأكيد الحجز
          </div>
          <div
            className="navbar-right"
            style={{
              position: "absolute",
              top: "85px",
              right: "40px",
              color: "#735634",
              fontSize: "32px",
            }}
          >
            PatientHub
          </div>
        </div>
      </nav>
      <div
        className="selected-service"
        style={{
          position: "absolute",
          top: "200px",
          right: "40px",
          color: "#735634",
          fontSize: "25px",
          padding: "5px",
        }}
      >
        {selectedService}
      </div>
      <div
        className="selected-time"
        style={{
          position: "absolute",
          top: "240px",
          right: "40px",
          color: "#735634",
          fontSize: "20px",
        }}
      >
        تاريخ الحجز:- {dayjs(selectedDate).format("YYYY-MM-DD")}
      </div>
      <div
        className="selected-time"
        style={{
          position: "absolute",
          top: "270px",
          right: "40px",
          color: "#735634",
          fontSize: "20px",
        }}
      >
        وقت الحجز: {selectedTime}
      </div>
      <h2 style={{ fontSize: 20 }}>الرجاء اعطاء المعلومات التالية</h2>
      <div className="userinfo-confirmation">
        {bookingSuccess ? (
          <section className = "done">
          <div >
            تم الحجز بنجاح
            <br />
            جاري اعادة التوجيه إلى الصفحة الرئيسية
          </div>
          </section>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
            <label htmlFor="firstname" style={{ fontSize: 20 }}>
              الاسم
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={values.firstname}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.firstname && (
              <div className="error-message">{errors.firstname}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="secondename" style={{ fontSize: 20 }}>
              اسم الاب
            </label>
            <input
              type="text"
              name="secondename"
              value={values.secondename}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.secondename && (
              <div className="error-message">{errors.secondename}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="age" style={{ fontSize: 20 }}>
              العمر
            </label>
            <input
              type="number"
              name="age"
              value={values.age}
              onChange={handleChange}
              className="form-control"
              required
              pattern="[0-9]"
            />
            {errors.age && (
              <div className="error-message">{errors.age}</div>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="Location" style={{ fontSize: 20 }}>
              العنوان
            </label>
            <select
              name="Location"
              value={values.Location}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">اختر العنوان</option>
              <option value="الرصافة">الرصافة</option>
              <option value="الكرخ">الكرخ</option>
            </select>
            {errors.Location && (
              <div className="error-message">{errors.Location}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="phone_number" style={{ fontSize: 20 }}>
              رقم الهاتف
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.phone_number && (
              <div className="error-message">{errors.phone_number}</div>
            )}
          </div>
        </div>
        <div>
          <button type="submit" className="button" onClick={handleSubmit}>
            تأكيد
          </button>
          </div>
      </form>
        )}
      </div>
    </div>
  );
};
export default UserInfoConfirmation;
