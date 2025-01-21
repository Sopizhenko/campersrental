import css from "./CampersFilters.module.css"
import {defaultFilters} from "../../Utills.js";
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";
import FilterCheckbox from "./FilterCheckbox.jsx";

const VehicleFeaturesFilter = ({filters, onChange}) => {
    const handleVehicleFeatureChange = (vehicleFeature, value) => {
        onChange(vehicleFeature, value);
    }

    return (
        <>
            <BlockTitle underlined={true}>Vehicle equipment</BlockTitle>
            <div className={css.filterSection}>
                {Object.keys(defaultFilters).map((vehicleFeature) => (
                    typeof defaultFilters[vehicleFeature] === 'boolean' &&
                    <FilterCheckbox
                        key={vehicleFeature}
                        onChange={handleVehicleFeatureChange}
                        checked={filters[vehicleFeature] === true}
                        name={vehicleFeature}
                    />
                ))}
            </div>
        </>
    );
}

export default VehicleFeaturesFilter;