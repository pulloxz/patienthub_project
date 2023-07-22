import { useState } from "react";
import dayjs from "dayjs";
import axios from "axios";
import "./FormCard.css";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  father_name: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  age: Yup.number()
    .positive("العمر يجب أن يكون رقمًا موجبًا")
    .integer("العمر يجب أن يكون رقمًا صحيحًا")
    .min(2, "العمر يجب أن يحتوي على رقمين على الأقل")
    .required("العمر مطلوب"),
  العنوان: Yup.string().required("العنوان مطلوب"),
  phone_number: Yup.string()
    .matches(
      /^07[0-9]{9}$/,
      "يجب أن يكون رقم الهاتف مبدوء بـ 07 ويحتوي على 11 رقم"
    )
    .required("رقم الهاتف مطلوب"),
});

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
  const formData = new FormData();
    formData.append("FirstName", values.name);
    formData.append("LastName", values.father_name);
    formData.append("Email", values.email);
    formData.append("BirthDate", values.age);
    formData.append("PhoneNumber", values.phone_number);
    formData.append("Task", values.taskid);
    formData.append("cvFile", values.cv);
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://localhost:3001/api/StudentReg/students", formData)
      .then((res) => {
        console.log(res?.data);
        // Reset form values
       
      })
     
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
          </div>
        </div>

        <button onClick={handleSubmit} type="submit" className="button">
          قدم الطلب
        </button>
      </form>
    </div>
  );
};

export default FormCard;