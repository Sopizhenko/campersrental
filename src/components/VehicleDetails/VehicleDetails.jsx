import css from "./VehicleDetails.module.css";
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";
import { selectSelectedCamperVehicleDetails } from "../../redux/campersSlice.js";
import { useSelector } from "react-redux";
import { capitalize } from "../../Utills.js";

const VehicleDetails = () => {
  const vehicleDetails = useSelector(selectSelectedCamperVehicleDetails);

  return (
    <div>
      {vehicleDetails && (
        <div>
          <BlockTitle underlined={true}>Vehicle Details</BlockTitle>
          <ul className={css.vehicleDetailsList}>
            {Object.keys(vehicleDetails).map((detail, index) => (
              <li key={index} className={css.vehicleDetailsListItem}>
                <span>{detail}</span>
                <span>{capitalize(vehicleDetails[detail])}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;
