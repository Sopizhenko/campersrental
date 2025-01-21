import Icon from "../Shared/Icon/Icon";
import css from "./CamperReviews.module.css"
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";

const ReviewerDetails = ({name, rating}) => {
    return (
        <div className={css.reviewerDetails}>
            <h4 className={css.reviewerName}>{name}</h4>
            <div className={css.stars}>
                {Array.from({length: 5}).map((_, index) => {
                    const starClass = index < rating ? css.starFilled : css.starEmpty;
                    return <Icon key={index} id={'icon-rating'} size={16} className={starClass}/>;
                })}
            </div>
        </div>
    );
};

export default ReviewerDetails;