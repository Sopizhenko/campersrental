import Container from "../Shared/Container/Container";
import css from "./Header.module.css";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerTop}>
          <Logo />
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
