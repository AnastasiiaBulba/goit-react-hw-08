import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import {
  selectFilteredContacts,
  selectContactsLoading,
  selectContactsError,
} from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();

  // Отримання контактів при монтуванні компонента
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

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
