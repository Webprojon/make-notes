import { FaSearch } from 'react-icons/fa';
import { setSearchNotes } from '../redux/slices';
import { useDispatch, useSelector } from 'react-redux';

export default function SearchNotes() {
  const { searchNotes, isDarkTheme } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  return (
    <section className="notes__search">
      <input
        type="text"
        autoComplete="off"
        value={searchNotes}
        onChange={(e) => dispatch(setSearchNotes(e.target.value))}
        placeholder="Type to search..."
        className={`notes__search-input ${isDarkTheme && 'search-input-dark'}`}
      />
      <FaSearch className="notes__search-icon" />
    </section>
  );
}
