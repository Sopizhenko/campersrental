import css from "./CampersList.module.css";
import Icon from "../Shared/Icon/Icon.jsx";
import { useDispatch } from "react-redux";

const Favorite = ({ camper }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <>
      <button className={css.favoritesButton} onClick={handleFavoriteClick}>
        <Icon id="icon-heart" size={25} />
      </button>
    </>
  );
};

export default Favorite;
