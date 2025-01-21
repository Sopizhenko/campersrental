import css from "./FilterCheckbox.module.css";
import clsx from "clsx";
import {featureMapping, capitalize} from "../../Utills.js";
import Icon from "../Shared/Icon/Icon.jsx";

const FilterCheckbox = ({name, checked, onChange}) => {
    return (
        <label className={clsx(css.filterCheckbox, {[css.active]: checked})}>
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={(e) => onChange(name, e.target.checked)}
                className={css.hiddenInput}
            />
            <Icon id={featureMapping[name]} size={32}/>
            {capitalize(name)}
        </label>
    );
};

export default FilterCheckbox;