import {useField} from "formik";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.css";
import {enUS} from "date-fns/locale";

// Customize the locale
const customLocale = {
    ...enUS,
    localize: {
        ...enUS.localize,
        day: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n], // Override to use 3-letter days
    },
};

// Register the custom locale
registerLocale("custom-en", customLocale);

const CustomDatePicker = ({name = "", className, errorClassName}) => {
    const [field, meta, helpers] = useField(name);

    const {value} = meta;
    const {setValue} = helpers;

    return (
        <>
            <DatePicker
                {...field}
                selected={value}
                placeholderText={'Booking date*'}
                className={className}
                minDate={new Date()}
                calendarStartDay={1}
                onChange={date => setValue(date)}
                locale="custom-en"
            />
            {meta.touched && meta.error ? (
                <div className={errorClassName}>{meta.error}</div>
            ) : null}
        </>
    );
}

export default CustomDatePicker;