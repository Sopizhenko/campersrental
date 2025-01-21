import css from "./CampersFilters.module.css"
import Text from "../Shared/Text/Text.jsx";
import Icon from "../Shared/Icon/Icon.jsx";
import clsx from "clsx";
import {useState} from "react";

const LocationFilter = ({location, onChange}) => {
    const [hasLocation, setHasLocation] = useState(false);

    const handleLocationChange = (key, value) => {
        onChange(key, value);
        setHasLocation(value.length > 0);
        console.log('hasLocation', hasLocation);
    }

    return (
        <div className={css.locationFilter}>
            <label htmlFor="location">
                <Text>Location</Text>
                <Icon id="icon-map" size={20} className={clsx(css.locationInputIcon, {[css.active]: hasLocation})}/>
            </label>
            <input
                className={css.locationInput}
                type="text"
                placeholder="Ukraine, Kyiv"
                id="location"
                value={location}
                onChange={(e) => handleLocationChange('location', e.target.value)}
            />
        </div>
    );
}

export default LocationFilter;
