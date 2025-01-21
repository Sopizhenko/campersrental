import css from "./CamperFeatures.module.css"
import VehicleDetails from "../VehicleDetails/VehicleDetails.jsx";
import FeaturesList from "../FeaturesList/FeaturesList.jsx";
import {useSelector} from "react-redux";
import {selectSelectedCamper} from "../../redux/campersSlice.js";

const CamperFeatures = () => {
    const camper = useSelector(selectSelectedCamper);

    return (
        <div className={css.featuresWrapper}>
            <FeaturesList camper={camper}/>
            <VehicleDetails/>
        </div>
    );
}

export default CamperFeatures