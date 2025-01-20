import css from "./Heading.module.css"

const Heading = ({children}) => {
    return (
        <h2 className={css.heading}>
            {children}
        </h2>
    );
}

export default Heading