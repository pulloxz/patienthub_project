import { useState, useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
import "./FormCard.css";

const FormCard = () => {
  const [values, setValues] = useState({
    name: "",
    father_name: "",
    age: dayjs().format("YYYY-MM-DD"),
    phone_number: "",
    email: "",
    cv: null,
    taskid: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      // Automatically hide the notification after 3 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setValues((prevValues) => ({
      ...prevValues,
      cv: file,
    }));
  };
  const validateForm = () => {
    const errors = {};

    // Validation rules
    if (!values.name || values.name.length < 2) {
      errors.name = "الاسم يجب أن يتكون من حرفين على الأقل";
    }

    if (!values.father_name || values.father_name.length < 2) {
      errors.father_name = "اسم الاب يجب أن يتكون من حرفين على الأقل";
    }

    if (!values.age || parseInt(values.age) < 2) {
      errors.age = "العمر يجب أن يحتوي على رقمين على الأقل";
    }

    if (!values.phone_number || !/^07[0-9]{9}$/.test(values.phone_number)) {
      errors.phone_number =
        "يجب أن يكون رقم الهاتف مبدوء بـ 07 ويحتوي على 11 رقم";
    }

    if (!values.email) {
      errors.email = "الايميل الشخصي مطلوب";
    }

    if (!values.cv) {
      errors.cv = "السيرة الذاتية مطلوبة";
    }

    if (!values.taskid) {
      errors.taskid = "الحالة المطلوبة مطلوبة";
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    const errors = validateForm();
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("FirstName", values.name);
      formData.append("LastName", values.father_name);
      formData.append("Email", values.email);
      formData.append("BirthDate", values.age);
      formData.append("PhoneNumber", values.phone_number);
      formData.append("Task", values.taskid);
      formData.append("cvFile", values.cv);

      axios
        .post("https://localhost:3001/api/StudentReg/students", formData)
        .then((res) => {
          console.log(res?.data);
          setSubmitted(true);
          setValues({
            name: "",
            father_name: "",
            age: dayjs().format("YYYY-MM-DD"),
            phone_number: "",
            email: "",
            cv: null,
            taskid: "",
          });
          setErrors({});
          setShowNotification(true);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="allform">
      <form onSubmit={handleSubmit} className="theform">
        <div className="form-row">
          <div className="txt_field">
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>*الاسم</label>
          </div>
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-row">
          <div className="txt_field">
            <input
              type="text"
              id="father_name"
              name="father_name"
              value={values.father_name}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>*اسم الاب</label>
          </div>
          {errors.father_name && (
            <div className="error-message">{errors.father_name}</div>
          )}
        </div>
        <div className="form-row">
          <div className="txt_field">
            <input
              type="date"
              id="age"
              name="age"
              value={values.age}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>*تاريخ الولادة</label>
          </div>
          {errors.age && <div className="error-message">{errors.age}</div>}
        </div>
        <div className="form-row">
          <div className="txt_field">
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>*الايميل الشخصي</label>
          </div>
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-row">
          <div className="txt_field">
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleChange}
              required
            />
            <span></span>
            <label>*رقم الهاتف</label>
          </div>
          {errors.phone_number && (
            <div className="error-message">{errors.phone_number}</div>
          )}
        </div>
        <div className="form-row">
          <div className="txt_field">
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              required
            />
            <span></span>
            <label>*السيرة الذاتية</label>
          </div>
          {errors.cv && <div className="error-message">{errors.cv}</div>}
        </div>

        <div className="form-row">

          <select  id="taskid"
              name="taskid"
              value={values.taskid}
              onChange={handleChange}
              className="form-control"
              required>
            <option className="label" value="">
              *الحالة المطلوبة
            </option>
            <option className="option" value="1">
              حشوة اسنان
            </option>
            <option className="option" value="2">
              قلع اسنان
            </option>
            <option className="option" value="3">
              تبييض الاسنان
            </option>
            <option className="option" value="4">
              فحص الاطفال
            </option>
            <option className="option" value="5">
              فحص البالغين
            </option>
            <option className="option" value="6">
              تقويم اسنان
            </option>
            <option className="option" value="7">
              تنظيف اسنان
            </option>
          </select>
          <span className="select-btn">
            <i className="zmdi zmdi-chevron-down"></i>
          </span>
          <label>*الحالة المطلوبة</label>
          {errors.taskid && (
            <div className="error-message">{errors.taskid}</div>
            )}
            
        </div>

        {submitted && showNotification && (
          <div className="success-notification show">تم إرسال طلبك بنجاح!</div>
        )}

        <button type="submit" className="button">
          قدم الطلب
        </button>
      </form>
    </div>
  );
};

export default FormCard;
