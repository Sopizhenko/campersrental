import css from "./BlockTitle.module.css";

const BlockTitle = ({ children, underlined = false }) => {
  return (
    <h3 className={`${css.blockTitle} ${underlined ? css.underlined : ""}`}>
      {children}
    </h3>
  );
};

export default BlockTitle;
