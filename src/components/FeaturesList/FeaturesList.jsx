import css from "./FeaturesList.module.css";
import FeatureBadge from "../Shared/FeatureBadge/FeatureBadge.jsx";
import { capitalize, featureMapping } from "../../Utills.js";

const FeaturesList = ({ camper }) => {
  return (
    <>
      <ul className={css.featuresList}>
        {Object.keys(featureMapping).map((feature, index) => {
          if (camper[feature]) {
            return (
              <li key={index}>
                <FeatureBadge
                  icon={featureMapping[feature]}
                  text={capitalize(
                    ["engine", "transmission"].includes(feature)
                      ? camper[feature]
                      : feature,
                  )}
                />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};

export default FeaturesList;
