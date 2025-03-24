import css from "./CamperReviews.module.css";
import { useSelector } from "react-redux";
import { selectSelectedCamperReviews } from "../../redux/campersSlice.js";
import Heading from "../Shared/Heading/Heading.jsx";
import ReviewCard from "./ReviewCard.jsx";

const CamperReviews = () => {
  const reviews = useSelector(selectSelectedCamperReviews);

  return reviews && reviews.length > 0 ? (
    <>
      <ul className={css.reviews}>
        {reviews.map((review, index) => (
          <li key={index}>
            <ReviewCard review={review} />
          </li>
        ))}
      </ul>
    </>
  ) : (
    <Heading>No reviews yet</Heading>
  );
};

export default CamperReviews;
