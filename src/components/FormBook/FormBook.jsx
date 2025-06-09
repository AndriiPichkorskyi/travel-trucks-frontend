import React from "react";
import css from "./FormBook.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import clsx from "clsx";
import { toast } from "react-toastify";

const BookSchema = Yup.object().shape({
    name: Yup.string().min(1, "To short").max(50, "To Long").required("Required"),
    email: Yup.string()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Wrong email address")
        .min(3, "To short")
        .max(100, "To long")
        .required("Required"),
    date: Yup.date().required("Required"),
    comment: Yup.string().min(3, "To short").max(1000, "To long"),
});

export default function FormBook() {
    const handleForm = (data) => {
        console.log("data :>> ", data);
        toast.success("Form send success");
    };

    return (
        <div>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={{ name: "", email: "", date: new Date(), comment: "" }}
                validationSchema={BookSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    handleForm(values);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({ isSubmitting, errors, touched, setFieldValue, values }) => (
                    <Form className={css.form}>
                        <div className={css["group-field"]}>
                            <Field type="text" name="name" className={css.input} placeholder="Name*" />
                            {touched.name && errors.name && <ErrorMessage name="name" component="p" className={css["error-message"]} />}
                        </div>

                        <div className={css["group-field"]}>
                            <Field type="text" name="email" className={css.input} placeholder="Email*" />
                            {touched.email && errors.email && <ErrorMessage name="email" component="p" className={css["error-message"]} />}
                        </div>

                        <div className={clsx(css["group-field"], css["group-field-date"])}>
                            {/* <Field type="text" name="date" className={css.input} placeholder="Date*" /> */}
                            <DatePicker name="date" className={css.input} placeholderText="Booking date*" onChange={(e) => setFieldValue("date", e)} selected={values["date"]} formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)} minDate={new Date().toISOString().split("T")[0]} />
                            {touched.date && errors.date && <ErrorMessage name="date" component="p" className={css["error-message"]} />}
                        </div>

                        <div className={css["group-field"]}>
                            <Field as="textarea" type="text" name="comment" className={css.input} placeholder="Comment" />
                            {touched.comment && errors.comment && <ErrorMessage name="comment" component="p" className={css["error-message"]} />}
                        </div>

                        <Button type="submit" disabled={isSubmitting} color="white" className={css["form-btn"]}>
                            Send
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
