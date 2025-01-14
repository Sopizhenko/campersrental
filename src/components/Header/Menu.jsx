import { NavLink } from "react-router-dom";
import css from "./Menu.module.css";
import Logo from "./Logo";

const Menu = () => {
  return (
    <nav className={css.menu}>
      <ul className={css.menuList}>
        <Logo />
        <li className={css.menuItem}>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li className={css.menuItem}>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;