import css from "./CamperReviews.module.css"
import Avatar from "./Avatar.jsx";
import ReviewerDetails from "./ReviewerDetails.jsx";
import Text from "../Shared/Text/Text.jsx";

const ReviewCard = ({review}) => {
    const {reviewer_name, reviewer_rating, comment} = review;
    const initial = reviewer_name.split(" ").map(name => name[0]).join("");

    return (
        <div className={css.reviewCard}>
            <div className={css.reviewDetails}>
                <Avatar initial={initial}/>
                <ReviewerDetails name={reviewer_name} rating={reviewer_rating}/>
            </div>
            <Text>{comment}</Text>
        </div>
    );
};

export default ReviewCard;