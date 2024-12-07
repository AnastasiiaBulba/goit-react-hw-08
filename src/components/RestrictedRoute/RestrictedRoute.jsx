import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./RestrictedRoute.module.css";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    <div className={css.restrictedRoute}>
      <p className={css.redirectMessage}>You are already logged in</p>
      <Navigate to="/contacts" />
    </div>
  ) : (
    children
  );
};

export default RestrictedRoute;

// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";

// const RestrictedRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? <Navigate to="/contacts" /> : children;
// };

// export default RestrictedRoute;
