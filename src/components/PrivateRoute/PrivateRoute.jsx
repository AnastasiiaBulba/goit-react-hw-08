import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import css from "./PrivateRoute.module.css";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? (
    <div className={css.privateRoute}>
      <p className={css.redirectMessage}>Please log in to access this page</p>
      <Navigate to="/login" />
    </div>
  ) : (
    children
  );
};

export default PrivateRoute;

// import { Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from "../../redux/auth/selectors";

// const PrivateRoute = ({ children }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);

//   const shouldRedirect = !isLoggedIn && !isRefreshing;

//   return shouldRedirect ? <Navigate to="/login" /> : children;
// };

// export default PrivateRoute;
