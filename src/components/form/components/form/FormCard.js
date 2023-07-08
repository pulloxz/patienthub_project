import "./FormCard.css";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import DatePicker from "react-datepicker";
const validationSchema = Yup.object({
  الاسم: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  الاب: Yup.string()
    .min(2, "الاسم يجب ان يتكون من حرفين على الاقل")
    .required("الاسم مطلوب"),
  العمر: Yup.date()
    .min(dayjs("1980-01-01").toDate(), "المواليد يجب ان يكون بين 1980 و 2006")
    .max(dayjs("2006-01-01").toDate(), "المواليد يجب ان يكون بين 1980 و 2006")
    .required("Birth date is required"),
  رقم_الهاتف: Yup.string()
    .matches(
      /^07[0-9]{9}$/,
      "يجب أن يكون رقم الهاتف يبدأ بـ 07 ويحتوي على 9 أرقام"
    )
    .required("رقم الهاتف مطلوب"),
  السيرة_الذاتية: Yup.mixed()
    .test(
      "fileType",
      "السيرة الذاتية يجب انو تكون بصيغة بي دي اف ",
      (value) => value && value.type === "application/pdf"
    )
    .required("السيرة الذاتية مطلوبة"),
  الايميل: Yup.string().email().required("الايميل مطلوب"),
});
const initialValues = {
  الاسم: "",
  الاب: "",
  العمر: dayjs().format("YYYY-MM-DD"),

  رقم_الهاتف: "",
  الايميل: "",
  السيرة_الذاتية: null,
};
const onSubmit = (values, { resetForm }) => {
  // Handle form submission logic here
  console.log(values);
  resetForm();
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
              <label htmlFor="الاسم الاول" className="label">
                *الاسم
              </label>

              <Field
                type="text"
                name="الاسم"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="الاسم"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor="الاسم الثاني" className="label">
                *اسم الاب
              </label>
              <Field
                type="text"
                name="الاب"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="الاب"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="تاريخ الولادة" className="label">
                *تاريخ الولادة
              </label>
              <Field
                type="date"
                id="العمر"
                name="العمر"
                className="form-control"
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="العمر"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor="الايميل الشخصي" className="label">
                *الايميل الشخصي
              </label>
              <Field
                type="text"
                name="الايميل"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="الايميل"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="رقم_الهاتف" className="label">
                *رقم الهاتف
              </label>
              <Field
                type="text"
                name="رقم_الهاتف"
                className="form-control"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="رقم_الهاتف"
                  component="div"
                  className="error-message"
                />
              </div>
            </div>
            <div className="problem">
              <label htmlFor=" السيرة الذاتية" className="label">
                *السيرة الذاتية
              </label>
              <Field
                type="file"
                name="السيرة_الذاتية"
                className="cv"
                required
              />
              <div className="errorMessage">
                <ErrorMessage
                  name="السيرة_الذاتية"
                  component="div"
                  className="error-message"
                />
              </div>
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
