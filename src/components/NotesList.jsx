import { RiDeleteBin5Fill } from 'react-icons/ri';
import Header from './Header';
import AddNoteModal from './AddNoteModal';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModal, setUpdateNotes } from '../redux/slices';
import { FiPlus } from 'react-icons/fi';
import SearchNotes from './SearchNotes';

export default function NotesList() {
  const dispatch = useDispatch();
  const { notes, isOpenModal, searchNotes } = useSelector(
    (state) => state.global,
  );

  const searchedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchNotes.toLowerCase()),
  );

  return (
    <main className="notes__container">
      <Header />
      <SearchNotes />

      <section className="notes__list">
        {searchedNotes.length > 0 ? (
          searchedNotes.map((note) => (
            <div key={note.id} className="notes__list-card">
              <div>
                <h2 className="notes__list-title">{note.title}</h2>
                <p className="notes__list-text">{note.text}</p>
              </div>
              <div className="notes__list-wrap">
                <span className="notes__list-span">{note.date}</span>
                <RiDeleteBin5Fill
                  onClick={() => dispatch(setUpdateNotes(note.id))}
                  className="notes__list-delicon"
                />
              </div>
            </div>
          ))
        ) : (
          <div className="notes__list-card-notfound">
            <h2 className="notes__list-card-notfound-h2">No notes here yet</h2>
          </div>
        )}

        {isOpenModal ? (
          <AddNoteModal />
        ) : (
          <div
            onClick={() => dispatch(setIsOpenModal())}
            className="notes__add"
          >
            <FiPlus className="notes__add-plus-icon" />
          </div>
        )}
      </section>
    </main>
  );
}
