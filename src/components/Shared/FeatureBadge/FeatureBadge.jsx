import css from "./FeatureBadge.module.css";
import Icon from "../Icon/Icon";

const FeatureBadge = ({ icon, text }) => {
  return (
    <div className={css.featureBadge}>
      <Icon id={icon} size={20} />
      <span className={css.featureBadge_text}>{text}</span>
    </div>
  );
};

export default FeatureBadge;
