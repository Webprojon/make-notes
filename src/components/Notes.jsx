import { RiDeleteBin5Fill } from 'react-icons/ri';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModal, setUpdateNotes } from '../redux/slices';
import { FiPlus } from 'react-icons/fi';
import Modal from './Modal';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Notes() {
  const dispatch = useDispatch();
  const { notes, isOpenModal, searchNotes, isDarkTheme } = useSelector(
    (state) => state.global,
  );

  const generalStyle = {
    color: '#a7a7a7',
    backgroundColor: '#0f1d30',
  };

  const darkMode = isDarkTheme ? generalStyle : null;

  const searchedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchNotes.toLowerCase()),
  );

  return (
    <main className={`${isDarkTheme && 'main-dark'}`}>
      <section
        className={`notes__container ${isDarkTheme && 'notes__container-dark'}`}
      >
        <div className="header">
          <Header />
          <Search />
        </div>
      </section>

      <section className="notes__list">
        {searchedNotes.length > 0 ? (
          searchedNotes.map((note) => (
            <div key={note.id} className="notes__list-card" style={darkMode}>
              <Link to={`/note/${note.id}`} className="notes__link">
                <h2 className="notes__list-title" style={darkMode}>
                  {note.title}
                </h2>
                <p className="notes__list-text" style={darkMode}>
                  {note.text}
                </p>
              </Link>
              <div className="notes__list-wrap">
                <span style={darkMode} className="notes__list-span">
                  {note.date}
                </span>
                <RiDeleteBin5Fill
                  onClick={() => dispatch(setUpdateNotes(note.id))}
                  className="notes__list-delicon"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="notes__list-card-notfound" style={darkMode}>
            <h2 className="notes__list-card-notfound-h2">No notes here yet</h2>
          </div>
        )}

        {isOpenModal ? (
          <Modal />
        ) : (
          <div
            style={darkMode}
            className="notes__add"
            onClick={() => dispatch(setIsOpenModal())}
          >
            <FiPlus className="notes__add-plus-icon" />
          </div>
        )}
      </section>
    </main>
  );
}
