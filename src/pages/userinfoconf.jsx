import './userinfoconf.css'
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { IoIosArrowBack } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import dayjs from 'dayjs';
const validationSchema = Yup.object({
  الاسم: Yup.string().min(2, 'الاسم يجب ان يتكون من حرفين على الاقل').required('الاسم مطلوب'),
  اسم_الاب: Yup.string().min(2, 'الاسم يجب ان يتكون من حرفين على الاقل').required('الاسم مطلوب'),
  العمر: Yup.number().min(5, 'لا يمكن أن يكون العمر أقل من 5 سنوات').required('العمر مطلوب'),
  العنوان: Yup.string().required('العنوان مطلوب'),
  رقم_الهاتف: Yup.string().matches(/^\d+$/, 'يجب أن يحتوي رقم الهاتف على أرقام فقط').required('رقم الهاتف مطلوب'),
});


const UserInfoConformation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const selectedService = location.state?.selectedService || 'الخدمة المختارة';
  const selectedDate = dayjs(location.state?.selectedDate).format('YYYY-MM-DD');
  const selectedTime = location.state?.selectedTime?.toString();
  const initialValues = {
    الاسم: '',
    اسم_الاب: '',
    العنوان: '',
    رقم_الهاتف: '',
    العمر:'',
  };

  
  const handleSubmit = () => {
   
    setBookingSuccess(true);
    setTimeout(() => {
      navigate('/booking');
    }, 6000); 

   
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
          جاري اعادة التوجيه إلى صفحة الحجز
        </div>
      ) : (
 <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form>
          <div className="form-row">
          <div className="form-group col-md-6">
              <label htmlFor="اسم_الاب" style={{ fontSize: 20 }}>اسم الاب</label>
              <Field
                type="text"
                name="اسم_الاب"
                className="form-control"
                required
              />
              <ErrorMessage name="اسم_الاب" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="الاسم" style={{ fontSize: 20 }}>الاسم</label>
              <Field
                type="text"
                name="الاسم"
                className="form-control"
                required
              />
              <ErrorMessage name="الاسم" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="العمر" style={{ fontSize: 20 }}>العمر</label>
              <Field
                type="number"
                name="العمر"
                className="form-control"
                required
                
              />
              <ErrorMessage name="العمر" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="العنوان" style={{ fontSize: 20 }}>العنوان</label>
              <Field
               as='select'
                name="العنوان"
                className="form-control"
                required>
                  <option value="">اختر العنوان</option>
    <option value="عنوان 1">الرصافة</option>
    <option value="عنوان 2">الكرخ</option>
                </Field>
             
              
              <ErrorMessage name="العنوان" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="رقم_الهاتف" style={{ fontSize: 20 }}>رقم الهاتف</label>
              <Field
                type="tel"
                name="رقم_الهاتف"
                className="form-control"
                required
              />
              <ErrorMessage name="رقم_الهاتف" component="div" className="error-message" style={{ fontSize: 20 }} />
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
