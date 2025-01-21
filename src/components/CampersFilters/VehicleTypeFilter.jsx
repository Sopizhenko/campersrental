import css from "./CampersFilters.module.css"

const VehicleTypeFilter = ({vehicleTypes, selectedVehicleType, setSelectedVehicleType}) => {
    return (
        <div>
            <h3>Vehicle Type</h3>
            <select
                value={selectedVehicleType}
                onChange={(e) => setSelectedVehicleType(e.target.value)}
            >
                <option value="">All</option>
                {vehicleTypes.map((vehicleType) => (
                    <option key={vehicleType} value={vehicleType}>
                        {vehicleType}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default VehicleTypeFilter;