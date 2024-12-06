import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className={css.navigation}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
          <div className={css.userMenu}>
            <span>Welcome, {user.name}</span>
            <button onClick={handleLogout} className={css.logoutButton}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <NavLink to="/register" className={css.navLink}>
            Register
          </NavLink>
          <NavLink to="/login" className={css.navLink}>
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
