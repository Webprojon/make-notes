import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setIsOpenModal, setNotes, setSearchNotes } from '../redux/slices';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { RiDeleteBin5Fill } from 'react-icons/ri';

export default function Modal() {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState(0);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const { notes, isDarkTheme } = useSelector((state) => state.global);

  const styles = {
    backgroundColor: '#a7a7a7',
  };
  const darkMode = isDarkTheme ? styles : null;

  const handleIdGenerator = (prevNotes) => {
    if (prevNotes.length === 0) return 1;
    const maxId = Math.max(...prevNotes.map((note) => note.id));
    return maxId + 1;
  };

  const setCurrentTime = () => {
    const today = new Date();
    const options = { month: 'long' };
    const day = today.getDate();
    const month = new Intl.DateTimeFormat('en-US', options).format(today);
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');

    return `${day} ${month} ${hours}:${minutes}`;
  };

  const handleAddNote = () => {
    if (noteTitle && noteText !== '') {
      dispatch(
        setNotes({
          id: handleIdGenerator(notes),
          title: noteTitle,
          text: noteText,
          date: setCurrentTime(),
        }),
      );

      setNoteTitle('');
      setNoteText('');
      dispatch(setIsOpenModal());
      dispatch(setSearchNotes(''));
    } else {
      toast.error('Please fill inputs 😏');
    }
  };

  const handleTextArea = (e) => {
    setNoteText(e.target.value);
    setCharacter(e.target.value.length);
  };

  return (
    <main className={`modal ${isDarkTheme && 'modal-dark'}`}>
      <div onClick={() => dispatch(setIsOpenModal())} className="modal__head">
        <FaArrowLeftLong />
        <RiDeleteBin5Fill />
      </div>
      <div>
        <input
          type="text"
          style={darkMode}
          value={noteTitle}
          autoComplete="off"
          placeholder="Title"
          className="modal__add-input"
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <p className="modal__current-time">
          {setCurrentTime()} Characters {character}
        </p>
        <textarea
          style={darkMode}
          value={noteText}
          placeholder="Type here"
          onChange={handleTextArea}
          className="modal__add-textarea"
        ></textarea>
      </div>
      <div className="modal__add-wrap">
        <button
          style={darkMode}
          className="modal__add-btn cancel"
          onClick={() => dispatch(setIsOpenModal())}
        >
          Cancel
        </button>
        <button
          style={darkMode}
          onClick={handleAddNote}
          className="modal__add-btn save"
        >
          Save
        </button>
      </div>
    </main>
  );
}
