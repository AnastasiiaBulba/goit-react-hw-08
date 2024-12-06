import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectContactsLoading,
  selectContactsError,
} from "../../redux/contacts/slice"; // Оновлений імпорт
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectFilteredContacts); // Використовуємо селектор для фільтрованих контактів
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!isLoggedIn) return null;
  if (isLoading) return <p>Loading contacts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
// import {
//   selectContactsLoading,
//   selectContactsError,
//   selectFilteredContacts,
// } from "../../redux/contacts/slice";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const contacts = useSelector(selectFilteredContacts); // використовується правильний селектор
//   const isLoading = useSelector(selectContactsLoading);
//   const error = useSelector(selectContactsError);

//   useEffect(() => {
//     if (isLoggedIn) {
//       dispatch(fetchContacts());
//     }
//   }, [dispatch, isLoggedIn]);

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id));
//   };

//   if (!isLoggedIn) return null;
//   if (isLoading) return <p>Loading contacts...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           onDelete={handleDelete}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
// // import {
// //   selectFilteredContacts,
// //   selectContactsLoading,
// //   selectContactsError,
// // } from "../../redux/contacts/slice";
// // import {
// //   selectContactsLoading,
// //   selectContactsError,
// //   contactsSlice,
// // } from "../../redux/contacts/slice";
// import {
//   selectContactsLoading,
//   selectContactsError,
//   selectFilteredContacts,
// } from "../../redux/contacts/slice";

// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// // import Contact from "../Contact/Contact";
// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// const ContactList = () => {
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   // const contacts = useSelector(selectFilteredContacts);
//   // const contacts = useSelector(contactsSlice);
//   const contacts = useSelector(selectFilteredContacts); // використовуйте правильний селектор

//   const isLoading = useSelector(selectContactsLoading);
//   const error = useSelector(selectContactsError);

//   useEffect(() => {
//     if (isLoggedIn) {
//       dispatch(fetchContacts());
//     }
//   }, [dispatch, isLoggedIn]);

//   const handleDelete = (id) => {
//     dispatch(deleteContact(id));
//   };

//   if (!isLoggedIn) return null;
//   if (isLoading) return <p>Loading contacts...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <Contact
//           key={id}
//           id={id}
//           name={name}
//           number={number}
//           onDelete={handleDelete}
//         />
//       ))}
//     </ul>
//   );
// };

// export default ContactList;
