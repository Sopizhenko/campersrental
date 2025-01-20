import css from "./Button.module.css"

const Button = ({text, onClick, className, type = "button", ...props}) => {
    return (
        <button
            type={type}
            className={`${css.button} ${className}`}
            onClick={onClick}
            {...props}
        >
            {text}
        </button>
    );
}

export default Button