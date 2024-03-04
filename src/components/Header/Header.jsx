import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <NavLink className={style.nav_link} to="/">
          Home
        </NavLink>
        <NavLink className={style.nav_link} to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
