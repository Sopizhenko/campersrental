import css from "./Location.module.css";
import Icon from "../Icon/Icon";

const Location = ({ camperLocation }) => {
  return (
    camperLocation && (
      <div className={css.location}>
        <Icon id={"icon-map"} size={16} />
        <span className={css.location_text}>{camperLocation}</span>
      </div>
    )
  );
};

export default Location;
