import css from "./CampersFilters.module.css"
import {capitalize, defaultFilters, featureMapping} from "../../Utills.js";
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";
import FilterCheckbox from "./FilterCheckbox.jsx";

const VehicleFeaturesFilter = ({filters, onChange}) => {
    const handleVehicleFeatureChange = (vehicleFeature, value) => {
        onChange(vehicleFeature, value);
    }

    return (
        <div className={css.vehicleFeatureFilter}>
            <BlockTitle underlined={true}>Vehicle equipment</BlockTitle>
            <div className={css.filterSection}>
                {Object.keys(defaultFilters).map((vehicleFeature) => (
                    typeof defaultFilters[vehicleFeature] === 'boolean' &&
                    <FilterCheckbox
                        key={vehicleFeature}
                        type="checkbox"
                        icon={featureMapping[vehicleFeature]}
                        onChange={handleVehicleFeatureChange}
                        checked={filters[vehicleFeature] === true}
                        name={vehicleFeature}
                        label={capitalize(vehicleFeature)}
                    />
                ))}
            </div>
        </div>
    );
}

export default VehicleFeaturesFilter;