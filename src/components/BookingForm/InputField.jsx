import { Field, useField } from "formik";
import css from "./BookingForm.module.css";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Field
        {...field}
        {...props}
        className={css.inputField}
        placeholder={label}
      />
      {meta.touched && meta.error ? (
        <div className={css.errorText}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default InputField;
