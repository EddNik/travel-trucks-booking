"use client";

import { Button } from "../Button/Button";
import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface BookingFormValues {
  name: string;
  email: string;
  date: Date | null;
  comment: string;
}

const initialValues: BookingFormValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const BookingFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .max(30, "Email is too long")
    .email("Invalid email format")
    .required("Email is required"),
  date: Yup.date().nullable().required("Booking date is required"),
  comment: Yup.string().max(150, "Comment must be at most 150 characters"),
});

const BookingForm = () => {
  const router = useRouter();
  const handleSubmit = async (
    values: BookingFormValues,
    actions: FormikHelpers<BookingFormValues>,
  ) => {
    try {
      // const bookedCamper = await bookCamper({
      //   ...values,
      //   date: new Date(values.date).toISOString(),
      // });

      // stub for an API function bookCamper() which was commented out above
      const bookedCamper = {
        ...values,
        date: new Date().toISOString(),
      };

      if (bookedCamper) {
        // here should be set booking store
        toast.success("Booking successful!");
        router.push("/catalog/filter");
        actions.resetForm();
      }
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;

      toast.error(axiosError.response?.data?.message || "Booking was rejected");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={BookingFormSchema}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <div className={css.container}>
          <h3 className={css.title}>Book your campervan now</h3>
          <p className={css.text}>
            Stay connected! We are always ready to help you.
          </p>

          <Form className={css.form}>
            <div className={css.inputWrapper}>
              <Field
                name="name"
                placeholder="Name*"
                className={css.input}
                required
              />
              <ErrorMessage
                name="name"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <Field
                name="email"
                placeholder="Email*"
                className={css.input}
                required
              />
              <ErrorMessage
                name="email"
                component="span"
                className={css.error}
              />
            </div>

            <div className={css.inputWrapper}>
              <DatePicker
                selected={values.date}
                onChange={(date: Date | null) => {
                  setFieldValue("date", date);
                }}
                placeholderText="Booking date*"
                wrapperClassName={css.datePickerWrapper}
                className={`${css.input} ${
                  touched.date && errors.date ? css.inputError : ""
                }`}
                dateFormat="yyyy-MM-dd"
              />
              <div className={css.errorText}>
                {touched.date && errors.date ? errors.date : ""}
              </div>
              <ErrorMessage
                name="date"
                component="span"
                className={css.error}
              />
            </div>

            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={css.textarea}
            />
            <ErrorMessage
              name="comment"
              component="span"
              className={css.error}
            />
            <div className={css.sendBtnWrapper}>
              <Button type="submit">Send</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default BookingForm;
