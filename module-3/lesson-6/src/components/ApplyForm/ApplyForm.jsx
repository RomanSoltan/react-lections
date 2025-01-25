import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ApplyForm.module.css";
import * as Yup from "yup";

const Apply = ({ register }) => {
  const initialValues = {
    name: "",
    age: "",
    email: "",
    plan: "",
    about: "",
    agree: false,
  };

  const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .required("Заповніть це поле, пліз!")
      .min(3, "Мінімум 3 символи")
      .max(20, "Максимум 20 символів")
      .matches(onlyLetters, "Числа в іменах? Ваш батько програміст?"),
    age: Yup.number()
      .required("Заповніть це поле, пліз!")
      .min(18, "Min 18")
      .max(99, "Max 99"),
    email: Yup.string()
      .required("Заповніть це поле, пліз!")
      .matches(re, "Це не email"),
    plan: Yup.string()
      .oneOf(["standard", "pro", "business"])
      .required("Заповніть це поле, пліз!"),
    about: Yup.string().required("Заповніть це поле, пліз!"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        {({ values }) => (
          <Form className={s.form}>
            <Field className={s.input} name="name" />
            <ErrorMessage className={s.error} component="p" name="name" />
            <Field className={s.input} name="age" type="number" />
            <ErrorMessage className={s.error} component="p" name="age" />
            <Field className={s.input} name="email" type="email" />
            <ErrorMessage className={s.error} component="p" name="email" />
            <Field className={s.input} as="select" name="plan">
              <option disabled value="">
                Choose your plan!
              </option>
              <option value="standard">Standard</option>
              <option value="pro">Pro</option>
              <option value="business">Business</option>
            </Field>
            <ErrorMessage className={s.error} component="p" name="plan" />
            <Field className={s.input} as="textarea" name="about" />
            <ErrorMessage className={s.error} component="p" name="about" />

            <label>
              <Field type="checkbox" name="agree" />I accept all terms of use!
            </label>
            <button disabled={!values.agree} className={s.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
export default Apply;
