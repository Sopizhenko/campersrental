import css from "./CampersList.module.css"
import {useSelector} from "react-redux";
import {selectCampers} from "../../redux/campersSlice";
import Heading from "../Shared/Heading/Heading.jsx";
import CamperCard from "./CamperCard.jsx";


const CampersList = () => {
    const campers = useSelector(selectCampers);

    return ((campers && campers.length > 0) && (
            <ul className={css.campersList}>
                {campers.map((camper) => (
                    <li key={camper.id} className={css.camperListItem}>
                        <CamperCard camper={camper}/>
                    </li>
                ))}
            </ul>)
    );
}

export default CampersList