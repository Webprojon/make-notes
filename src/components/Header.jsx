import { FaMoon } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/slices';
import { MdOutlineWbSunny } from 'react-icons/md';

export default function Header() {
  const dispatch = useDispatch();
  const { isDarkTheme } = useSelector((state) => state.global);

  return (
    <section className="notes__header">
      <h1 className={`notes__header-h1 ${isDarkTheme && 'header-h1-dark'}`}>
        Notes
      </h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`notes__header-btn ${isDarkTheme && 'header-btn-dark'}`}
      >
        {isDarkTheme ? <FaMoon /> : <MdOutlineWbSunny />}
        {isDarkTheme ? 'Dark Mode' : 'Light Mode'}
      </button>
    </section>
  );
}
