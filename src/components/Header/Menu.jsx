import {NavLink} from "react-router-dom";
import css from "./Menu.module.css"

const Menu = () => {
    return (
        <nav className={css.menu}>
            <ul className={css.menuList}>
                <li className={css.menuItem}>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? `${css.menuLink} ${css.active}` : css.menuLink}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>
                <li className={css.menuItem}>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? `${css.menuLink} ${css.active}` : css.menuLink}
                        to="/catalog"
                    >
                        Catalog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;