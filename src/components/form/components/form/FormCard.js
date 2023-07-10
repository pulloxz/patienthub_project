import "./FormCard.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import axios from "axios";


const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  father_name: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  age: Yup.date()
    .min(dayjs("1980-01-01").toDate(), "المواليد يجب ان يكون بين 1980 و 2006")
    .max(dayjs("2006-01-01").toDate(), "المواليد يجب ان يكون بين 1980 و 2006")
    .required("Birth date is required"),
  phone_number: Yup.string()
    .matches(
      /^07[0-9]{9}$/,
      "يجب أن يكون رقم الهاتف يبدأ بـ 07 ويحتوي على 9 أرقام"
    )
    .required("رقم الهاتف مطلوب"),
  cv: Yup.mixed()
    .test(
      "fileType",
      "السيرة الذاتية يجب انو تكون بصيغة بي دي اف ",
      (value) => value && value.type === "application/pdf"
    )
    .required("السيرة الذاتية مطلوبة"),
  الايميل: Yup.string().email().required("الايميل مطلوب"),
  taskid:Yup.string().required('الاختيار مطلوب')

});

const initialValues = {
  name: "",
  father_name: "",
  age: dayjs().format("YYYY-MM-DD"),
  phone_number: "",
  email: "",
  cv: null,
  taskid:""
};
const onSubmit = (values, { resetForm }) => {
  const data = {
    name: values.name,
    father_name: values.father_name,
    age: values.age,
    phone_number: values.phone_number,
    email: values.email,
    cv: values.cv,
    taskid: values.taskid,
  };

  axios
    .post('http://localhost:3001/api/StudentReg/students', data)
    .then(response => {
      console.log(response.data);
      resetForm();
    })
    .catch(error => {
      console.error(error);
    });
};

const FormCard = () => {

  return (
    <div className="allform">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="name" className="label">
                *الاسم
              </label>

              <Field
                type="text"
                name="name"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="name"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor="father_name" className="label">
                *اسم الاب
              </label>
              <Field
                type="text"
                name="father_name"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="father_name"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="age" className="label">
                *تاريخ الولادة
              </label>
              <Field
                type="date"
                id="age"
                name="age"
                className="form-control"
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="age"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor="emial" className="label">
                *الايميل الشخصي
              </label>
              <Field
                type="text"
                name="email"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="phone_number" className="label">
                *رقم الهاتف
              </label>
              <Field
                type="text"
                name="phone_number"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor="cv" className="label">
                *السيرة الذاتية
              </label>
              <Field
                type="file"
                name="cv"
                className="cv"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="cv"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
          <div className="problem">
              <label htmlFor="taskid" className="label"style={{ fontSize: 20 }}>الحالة المطلوبة</label>
              <Field
               as='select'
                name="taskid"
                className="form-control"
                required>
                  <option value="">اختر </option>
    <option value=" 1">حشوة اسنان</option>
    <option value=" 2">قلع</option>
    <option value=" 3">تنظيف</option>

                </Field>
             
              
              <ErrorMessage name="taskid" component="div" className="error-message" style={{ fontSize: 20 }} />
            </div>

          </div>
        </Form>
      </Formik>
      <button type="submit" className="button" onClick={onSubmit}>
        قدم الطلب
      </button>
    </div>
  );
};

export default FormCard;
