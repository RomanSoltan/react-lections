import { Field, Form, Formik } from "formik";
import s from "./ApplyForm.module.css";

const Apply = ({ register }) => {
  const initialValues = {
    name: "",
    age: "",
    plan: "",
    about: "",
    agree: false,
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <section className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className={s.form}>
            <Field className={s.input} name="name" />
            <Field className={s.input} name="age" type="number" />
            <Field className={s.input} as="select" name="plan">
              <option disabled value="">
                Choose your plan!
              </option>
              <option value="standard">Standard</option>
              <option value="pro">Pro</option>
              <option value="business">Business</option>
            </Field>
            <Field className={s.input} as="textarea" name="about" />
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
