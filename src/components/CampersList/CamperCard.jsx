import css from "./CampersList.module.css";
import Image from "../Shared/Image/Image";
import Heading from "../Shared/Heading/Heading.jsx";
import Price from "../Shared/Price/Price.jsx";
import RatingSummary from "../Shared/RatingSummary/RatingSummary.jsx";
import Location from "../Shared/Location/Location.jsx";
import Text from "../Shared/Text/Text.jsx";
import FeaturesList from "../FeaturesList/FeaturesList.jsx";
import Button from "../Shared/Button/Button.jsx";
import {useNavigate} from "react-router-dom";

const CamperCard = ({camper}) => {
    const imagePath = camper.gallery[0].thumb;
    const hasReviews = camper.reviews?.length > 0;
    const totalReviews = camper.reviews?.length;
    const navigate = useNavigate();

    const handleShowMore = () => {
        navigate(`/catalog/${camper.id}`);
    }

    return (
        <div className={css.camperCard}>
            <div className={css.camperImage}>
                <Image src={imagePath} alt={camper.name}/>
            </div>
            <div className={css.camperInfo}>
                <div className={css.headline}>
                    <Heading>{camper.name}</Heading>
                    <div className={css.price}>
                        <Price price={camper.price}/>
                    </div>
                </div>
                <div className={css.ratingLine}>
                    <RatingSummary rating={camper.rating} hasReviews={hasReviews} totalReviews={totalReviews}/>
                    <Location camperLocation={camper.location}/>
                </div>
                <div className={css.description}>
                    <Text maxLength={62}>{camper.description}</Text>
                </div>
                <div className={css.features}>
                    <FeaturesList camper={camper}/>
                </div>
                <Button type={'button'} text={'Show more'} className={css.showMore} onClick={handleShowMore}/>
            </div>
        </div>
    );
}

export default CamperCard