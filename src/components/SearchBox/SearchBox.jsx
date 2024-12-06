import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/contacts/slice";
import { setFilter } from "../../redux/contacts/slice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name or number</label>
      <input
        className={css.input}
        type="text"
        id="search"
        placeholder="Search..."
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
