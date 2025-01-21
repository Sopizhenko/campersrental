import css from "./RatingSummary.module.css"
import Icon from "../Icon/Icon"

const RatingSummary = ({rating, totalReviews, hasReviews}) => {
    return (
        <div className={css.ratingInfo}>
            <Icon className={(rating > 0 ? css.ratingInfo_icon : css.noRating_icon)} id={'icon-rating'} size={16}/>
            <span
                className={css.ratingInfo_text}>{hasReviews ? `${rating} (${totalReviews} Reviews)` : 'No reviews'}</span>
        </div>
    );
}

export default RatingSummary