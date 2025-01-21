import css from "./BookingForm.module.css"
import {Form, Formik} from "formik";
import * as Yup from "yup";
import InputField from "./InputField.jsx";
import Text from "../Shared/Text/Text.jsx";
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker.jsx";
import toast from "react-hot-toast";
import Button from "../Shared/Button/Button.jsx";


const BookingForm = () => {
    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        bookingDate: Yup.date().required("Booking date is required"),
        comment: Yup.string(),
    });

    // Form submission handler
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
        toast.success('Your booking has been submitted!');
    };

    return (
        <div className={css.formContainer}>
            <div className={css.formHeader}>
                <BlockTitle>Book your campervan now</BlockTitle>
                <Text>Stay connected! We are always ready to help you.</Text>
            </div>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    bookingDate: "",
                    comment: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={css.form}>
                    <InputField name="name" label="Name*"/>
                    <InputField name="email" label="Email*" type="email"/>
                    <CustomDatePicker name="bookingDate" className={css.inputField} errorClassName={css.errorText}/>
                    <InputField name="comment" label="Comment" component="textarea"/>
                    <Button type="submit" text="Send" className={css.submitBooking}/>
                </Form>
            </Formik>
        </div>
    );
}

export default BookingForm