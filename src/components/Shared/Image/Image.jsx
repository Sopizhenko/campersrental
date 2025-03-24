import css from "./Image.module.css";

const Image = ({ src, alt, onClick }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={css.imageCard_image}
      onClick={onClick ? () => onClick() : undefined}
    />
  );
};

export default Image;
