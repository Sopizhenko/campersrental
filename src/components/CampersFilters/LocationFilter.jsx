import css from "./CampersFilters.module.css"

const LocationFilter = ({location, setLocation}) => {
    return (
        <div>
            <label htmlFor="location">Location</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
        </div>
    );
}

export default LocationFilter;
