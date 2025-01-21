import css from "./CampersFilters.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getFilterParams} from "../../Utills.js";
import {selectFilters, setFilter} from "../../redux/filtersSlice.js";
import {fetchCampers} from "../../redux/campersOps.js";
import LocationFilter from "./LocationFilter.jsx";
import VehicleFeaturesFilter from "./VehicleFeaturesFilter.jsx";
import VehicleTypeFilter from "./VehicleTypeFilter.jsx";
import {selectCurrentPage} from "../../redux/campersSlice.js";
import {useNavigate} from "react-router-dom";

const CampersFilters = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filters = useSelector(selectFilters);
    const currentPage = useSelector(selectCurrentPage);

    const handleFilterChange = (key, value) => {
        dispatch(setFilter({[key]: value}));
    }

    const handleSearch = () => {
        const queryParams = getFilterParams(filters, currentPage)
        navigate(`?${queryParams}`);
        dispatch(fetchCampers(queryParams));
    };

    return (
        <div className="filter-sidebar">
            {/*<LocationFilter value={filters.location} onChange={handleFilterChange}/>*/}
            <VehicleFeaturesFilter filters={filters} onChange={handleFilterChange}/>
            {/*<VehicleTypeFilter filters={filters} onChange={handleFilterChange} vehicleTypes={['panelTruck', 'fullyIntegrated']}/>*/}
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default CampersFilters