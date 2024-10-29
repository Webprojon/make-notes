import { FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
    <section className="notes__header">
      <h1 className="notes__header-h1">Notes</h1>
      <button className="notes__header-btn">
        <FaMoon />
        Dark Mode
      </button>
    </section>
  );
}
