import css from "./CampersFilters.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getFilterParams} from "../../Utills.js";
import {selectFilters, setFilter} from "../../redux/filtersSlice.js";
import {fetchCampers} from "../../redux/campersOps.js";
import LocationFilter from "./LocationFilter.jsx";
import VehicleFeaturesFilter from "./VehicleFeaturesFilter.jsx";
import VehicleTypeFilter from "./VehicleTypeFilter.jsx";
import {selectCurrentPage, setCurrentPage} from "../../redux/campersSlice.js";
import {useNavigate} from "react-router-dom";
import Button from "../Shared/Button/Button.jsx";
import Text from "../Shared/Text/Text.jsx";

const CampersFilters = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filters = useSelector(selectFilters);
    const currentPage = useSelector(selectCurrentPage);

    const handleFilterChange = (key, value) => {
        dispatch(setFilter({[key]: value}));
    }

    const handleSearch = () => {
        dispatch(setCurrentPage(1));
        const queryParams = getFilterParams(filters, currentPage)
        navigate(`?${queryParams}`);
        dispatch(fetchCampers(queryParams));
    };

    return (
        <>
            <LocationFilter value={filters.location} onChange={handleFilterChange}/>
            <Text className={css.filtersHeader}>Filters</Text>
            <VehicleFeaturesFilter filters={filters} onChange={handleFilterChange}/>
            <VehicleTypeFilter filters={filters} onChange={handleFilterChange}/>
            <Button onClick={handleSearch} text='Search' className={css.filterButton}/>
        </>
    );
}

export default CampersFilters