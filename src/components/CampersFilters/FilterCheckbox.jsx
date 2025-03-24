import css from "./FilterCheckbox.module.css";
import clsx from "clsx";
import Icon from "../Shared/Icon/Icon.jsx";

const FilterCheckbox = ({
  type,
  name,
  checked,
  onChange,
  icon,
  label,
  value = null,
}) => {
  return (
    <label className={clsx(css.filterCheckbox, { [css.active]: checked })}>
      <input
        type={type}
        name={name}
        checked={checked}
        onChange={(e) => onChange(name, e.target.checked)}
        className={css.hiddenInput}
        value={value || name}
      />
      <Icon id={icon} size={32} />
      {label}
    </label>
  );
};

export default FilterCheckbox;
