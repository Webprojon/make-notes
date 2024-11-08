import { RiDeleteBin5Fill } from 'react-icons/ri';
import Header from './Header';
import AddNoteModal from './AddNoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModal, setUpdateNotes } from '../redux/slices';
import { FiPlus } from 'react-icons/fi';
import SearchNotes from './SearchNotes';
import { useEffect } from 'react';

export default function NotesList() {
  const dispatch = useDispatch();
  const { notes, isOpenModal, searchNotes, isDarkTheme } = useSelector(
    (state) => state.global,
  );

  useEffect(() => {
    isDarkTheme
      ? document.body.classList.add('body-dark')
      : document.body.classList.remove('body-dark');
  }, [isDarkTheme]);

  const generalStyle = {
    color: '#a7a7a7',
    backgroundColor: '#0f1d30',
  };

  const searchedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchNotes.toLowerCase()),
  );

  return (
    <main>
      <section
        className={`notes__container ${isDarkTheme && 'notes__container-dark'}`}
      >
        <div className="header">
          <Header />
          <SearchNotes />
        </div>
      </section>

      <section className="notes__list">
        {searchedNotes.length > 0 ? (
          searchedNotes.map((note) => (
            <div
              key={note.id}
              className="notes__list-card"
              style={isDarkTheme ? generalStyle : null}
            >
              <div>
                <h2 className="notes__list-title">{note.title}</h2>
                <p className="notes__list-text">{note.text}</p>
              </div>
              <div className="notes__list-wrap">
                <span
                  className={`notes__list-span ${isDarkTheme && 'notes__list-span-dark'}`}
                >
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
          <div
            className="notes__list-card-notfound"
            style={isDarkTheme ? generalStyle : null}
          >
            <h2 className="notes__list-card-notfound-h2">No notes here yet</h2>
          </div>
        )}

        {isOpenModal ? (
          <AddNoteModal />
        ) : (
          <div
            className="notes__add"
            onClick={() => dispatch(setIsOpenModal())}
            style={isDarkTheme ? generalStyle : null}
          >
            <FiPlus className="notes__add-plus-icon" />
          </div>
        )}
      </section>
    </main>
  );
}
