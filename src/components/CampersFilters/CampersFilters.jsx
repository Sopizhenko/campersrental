import css from "./CampersFilters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getFilterParams } from "../../Utills.js";
import {
  selectFilters,
  setFilter,
  resetFilters,
} from "../../redux/filtersSlice.js";
import { fetchCampers } from "../../redux/campersOps.js";
import LocationFilter from "./LocationFilter.jsx";
import VehicleFeaturesFilter from "./VehicleFeaturesFilter.jsx";
import VehicleTypeFilter from "./VehicleTypeFilter.jsx";
import { setCurrentPage } from "../../redux/campersSlice.js";
import Button from "../Shared/Button/Button.jsx";
import Text from "../Shared/Text/Text.jsx";

const CampersFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ [key]: value }));
  };

  const handleSearch = () => {
    dispatch(setCurrentPage(1));
    dispatch(fetchCampers(getFilterParams(filters, 1)));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(setCurrentPage(1));
    dispatch(fetchCampers(getFilterParams({}, 1)));
  };

  return (
    <>
      <LocationFilter value={filters.location} onChange={handleFilterChange} />
      <Text className={css.filtersHeader}>Filters</Text>
      <VehicleFeaturesFilter filters={filters} onChange={handleFilterChange} />
      <VehicleTypeFilter filters={filters} onChange={handleFilterChange} />
      <Button
        onClick={handleSearch}
        text="Search"
        className={css.filterButton}
      />
      <Button onClick={handleReset} text="Reset" className={css.resetButton} />
    </>
  );
};

export default CampersFilters;
