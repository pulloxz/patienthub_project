import './userinfoconf.css'
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import axios from 'axios';
const validationSchema = Yup.object({
  name: Yup.string().min(2, 'الاسم يجب ان يتكون من حرفين على الاقل').required('الاسم مطلوب'),
  father_name: Yup.string().min(2, 'الاسم يجب ان يتكون من حرفين على الاقل').required('الاسم مطلوب'),
  age: Yup.string().max(2 , 'لا يمكن ان يكون العمر اكثر من رقمين')
  .matches(/^\d+$/, 'يجب أن يحتوي العمر على أرقام فقط')
  .required('العمر مطلوب'),  العنوان: Yup.string().required('العنوان مطلوب'),
  phone_number: Yup.string()
    .matches(/^07[0-9]{9}$/, 'يجب أن يكون رقم الهاتف مبدوء بـ 07 ويحتوي على 11 رقم')
    .required('رقم الهاتف مطلوب'),
  });


const UserInfoConformation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const selectedService = location.state?.selectedService || 'الخدمة المختارة';
  const selectedDate = dayjs(location.state?.selectedDate).format('YYYY-MM-DD');
  const selectedTime = location.state?.selectedTime?.toString();
  const initialValues = {
    name: '',
    father_name: '',
    location: '',
    phone_number: '',
    age:'',
  };

  const handleSubmit = (values) => {
    const data = {
      name: values.name,
      father_name: values.father_name,
      location: values.location,
      phone_number: values.phone_number,
      age: values.age,
    };
  
    axios.post('http://localhost:3000/api/Appointment/appointments', data)
      .then(response => {
        console.log(response.data);
        setBookingSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 6000);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleBackClick = () => {
    navigate('/booking');
  };

  return (
    <div className='page'>
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
                fontSize: '20px',
              }}
            >
              <IoIosArrowBack style={{ width: '11px', height: '20px', marginRight: '5px' }} />
              <span style={{ fontSize: '24px', marginLeft: '5px', stroke: '0.5px' }}>رجوع</span>
            </button>
          </div>
          <div
            className="navbar-title"
            style={{
              position: 'absolute',
              top: '85px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#4E4766',
              fontSize: '32px',
            
            }}
          >
            تأكيد الحجز
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
      <div
        className="selected-service"
        style={{
          position: 'absolute',
          top: '200px',
          right: '40px',
          color: '#4E4766',
          fontSize: '25px',
          padding: '5px',
        }}
      >
        {selectedService}
      </div>
      <div
        className="selected-time"
        style={{
          position: 'absolute',
          top: '240px',
          right: '40px',
          color: '#4E4766',
          fontSize: '20px',
        }}
      >
    تاريخ الحجز:- {dayjs(selectedDate).format('YYYY-MM-DD')}
      </div>
      <div
        className="selected-time"
        style={{
          position: 'absolute',
          top: '270px',
          right: '40px',
          color: '#4E4766',
          fontSize: '20px',
        }}
      >
        وقت الحجز: {selectedTime}
      </div>
      <div className="userinfo-confirmation">
      <h2
      style={{
        fontSize: 20,
      }}
      >الرجاء اعطاء المعلومات التالية</h2>
      {bookingSuccess ? (
        <div className="success-message"
        style={{
          fontSize:20,
        }}
        >
          تم الحجز بنجاح
          <br />
          جاري اعادة التوجيه إلى الصفحة الرئيسية
        </div>
      ) : (
 <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form>
          <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="father_name" style={{ fontSize: 20 }}>اسم الاب</label>
              <Field
                type="text"
                name="father_name"
                className="form-control"
                required
              />
              <ErrorMessage name="اسم_الاب" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name" style={{ fontSize: 20 }}>الاسم</label>
              <Field
                type="text"
                name="name"
                className="form-control"
                required
              />
              <ErrorMessage name="name" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="age" style={{ fontSize: 20 }}>العمر</label>
              <Field
                 type="text"
                 name="age"
                 className="form-control"
                 required
                 pattern="[0-9]"
                
              />
              <ErrorMessage name="age" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="location" style={{ fontSize: 20 }}>العنوان</label>
              <Field
               as='select'
                name="location"
                className="form-control"
                required>
                  <option value="">اختر العنوان</option>
    <option value="عنوان 1">الرصافة</option>
    <option value="عنوان 2">الكرخ</option>
                </Field>
             
              
              <ErrorMessage name="location" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="phone_number" style={{ fontSize: 20 }}>رقم الهاتف</label>
              <Field
                type="tel"
                name="phone_number"
                className="form-control"
                required
              />
              <ErrorMessage name="phone_number" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
          </div>
        </Form>
      </Formik>
)}
    </div>
    <button type="submit" className="button" onClick={handleSubmit}>تأكيد</button>

    </div>
  );
};

export default UserInfoConformation;
