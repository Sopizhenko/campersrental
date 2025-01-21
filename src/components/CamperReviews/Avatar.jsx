import css from "./CamperReviews.module.css"

const Avatar = ({initial}) => {
    return (
        <div className={css.avatar}>
            <span>{initial}</span>
        </div>
    );
};

export default Avatar;