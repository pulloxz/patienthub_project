import { useState } from "react";
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
          // Reset form values
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
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div className="allform">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="problem">
            <label htmlFor="name" className="label">
              *الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </div>
          <div className="problem">
            <label htmlFor="father_name" className="label">
              *اسم الاب
            </label>
            <input
              type="text"
              id="father_name"
              name="father_name"
              value={values.father_name}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.father_name && (
              <div className="error-message">{errors.father_name}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="problem">
            <label htmlFor="age" className="label">
              *تاريخ الولادة
            </label>
            <input
              type="date"
              id="age"
              name="age"
              value={values.age}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.age && (
              <div className="error-message">{errors.age}</div>
            )}
          </div>
          <div className="problem">
            <label htmlFor="email" className="label">
              *الايميل الشخصي
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="form-control"
              required
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="problem">
            <label htmlFor="phone_number" className="label">
              *رقم الهاتف
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
          <div className="problem">
            <label htmlFor="cv" className="label">
              *السيرة الذاتية
            </label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleFileChange}
              className="cv"
              required
            />
            {errors.cv && (
              <div className="error-message">{errors.cv}</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className="problem">
            <label htmlFor="taskid" className="label">
              الحالة المطلوبة
            </label>
            <select
              id="taskid"
              name="taskid"
              value={values.taskid}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">اختر</option>
              <option value="1">حشوة اسنان</option>
              <option value="2">قلع</option>
              <option value="3">تنظيف</option>
            </select>
            {errors.taskid && (
              <div className="error-message">{errors.taskid}</div>
            )}
          </div>
        </div>
        <button type="submit" className="button">
          قدم الطلب
        </button>
      </form>
    </div>
  );
};

export default FormCard;
