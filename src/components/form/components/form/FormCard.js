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
    .matches(/^\d+$/, "يجب أن يحتوي رقم الهاتف على أرقام فقط")
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
  // const minDate = dayjs("2006-01-01");
  // const maxDate = dayjs("1980-01-01");
  // const validateDate = (value) => {
  //   const selectedDate = dayjs(value);
  //   if (selectedDate.isBefore(minDate) || selectedDate.isAfter(maxDate)) {
  //     return "الرجاء قم بادخال تاريخ اخر ";
  //   }
  // };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="الاسم الاول" className="label">
                *الاسم الاول
              </label>
              <Field
                type="text"
                name="الاسم"
                className="form-control"
                required
              />
              <ErrorMessage
                name="الاسم"
                component="div"
                className="error-message"
              />
            </div>
            <div className="problem">
              <label htmlFor="الاسم الثاني" className="label">
                *الاسم الثاني
              </label>
              <Field
                type="text"
                name="الاب"
                className="form-control"
                required
              />
              <ErrorMessage
                name="الاب"
                component="div"
                className="error-message"
              />
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
              <ErrorMessage
                name="العمر"
                component="div"
                className="error-message"
              />
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
              <ErrorMessage
                name="الايميل"
                component="div"
                className="error-message"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="problem">
              <label htmlFor="الاسم الاول" className="label">
                *رقم الهاتف
              </label>
              <Field
                type="text"
                name="رقم_الهاتف"
                className="form-control"
                required
              />
              <ErrorMessage
                name="رقم_الهاتف"
                component="div"
                className="error-message"
              />
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
              <ErrorMessage
                name="السيرة_الذاتية"
                component="div"
                className="error-message"
              />
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
