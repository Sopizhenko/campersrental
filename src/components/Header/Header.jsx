import Container from "../Container/Container";
import css from "./Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
