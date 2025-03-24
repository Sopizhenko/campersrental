import css from "./CampersFilters.module.css";
import BlockTitle from "../Shared/BlockTitle/BlockTitle.jsx";
import { featureMapping, vehicleTypesMapping } from "../../Utills.js";
import FilterCheckbox from "./FilterCheckbox.jsx";

const VehicleTypeFilter = ({ filters, onChange }) => {
  const handleVehicleTypeChange = (key, value) => {
    onChange("form", key);
  };

  return (
    <div className={css.vehicleTypeFilter}>
      <BlockTitle underlined={true}>Vehicle Type</BlockTitle>
      <div className={css.filterSection}>
        {Object.keys(vehicleTypesMapping).map((vehicleFeature) => (
          <FilterCheckbox
            key={vehicleFeature}
            type="radio"
            icon={featureMapping[vehicleFeature]}
            onChange={() => handleVehicleTypeChange(vehicleFeature, true)}
            checked={filters.form === vehicleFeature}
            name="form"
            label={vehicleTypesMapping[vehicleFeature]}
            value={vehicleFeature}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleTypeFilter;
