import React from 'react';
import {useSelector} from "react-redux";
import css from "./RatingSummary.module.css"
import {selectSelectedCamperStats} from "../../../redux/campersSlice.js";
import Icon from "../Icon/Icon"

const RatingSummary = () => {
    const {rating, totalReviews, hasReviews} = useSelector(selectSelectedCamperStats);

    return (
        <div className={css.ratingInfo}>
            <Icon className={(rating > 0 ? css.ratingInfo_icon : css.noRating_icon)} id={'icon-rating'} size={16}/>
            <span
                className={css.ratingInfo_text}>{hasReviews ? `${rating} (${totalReviews} Reviews)` : 'No reviews'}</span>
        </div>
    );
}

export default RatingSummary