import css from "./Text.module.css"

const Text = ({children, maxLength}) => {
    const getTruncatedText = () => {
        if (maxLength && children.length > maxLength) {
            return children.slice(0, maxLength) + "...";
        }
        return children;
    };

    return (
        <p className={css.text}>
            {getTruncatedText()}
        </p>
    );
}

export default Text