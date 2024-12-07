import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./HomePage.module.css";

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.homePage}>
      <h1>Welcome to Phonebook</h1>
      {!isLoggedIn ? (
        <p>Please log in or register to manage your contacts</p>
      ) : (
        <Link to="/contacts" className={css.link}>
          Go to Contacts
        </Link>
      )}
    </div>
  );
};

export default HomePage;

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import css from "./HomePage.module.css";

// const HomePage = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <div className={css.homePage}>
//       <h1>Welcome to Phonebook</h1>
//       {!isLoggedIn ? (
//         <div className={css.authLinks}>
//           <Link to="/register" className={css.link}>
//             Register
//           </Link>
//           <Link to="/login" className={css.link}>
//             Login
//           </Link>
//         </div>
//       ) : (
//         <Link to="/contacts" className={css.link}>
//           Go to Contacts
//         </Link>
//       )}
//     </div>
//   );
// };

// export default HomePage;
