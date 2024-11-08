import { FaArrowLeft } from 'react-icons/fa6';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setUpdateNotes } from '../redux/slices';

export default function Note() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { notes, isDarkTheme } = useSelector((state) => state.global);
  const navigate = useNavigate();

  const note = notes.find((item) => item.id === parseInt(id));

  if (!note) {
    return <p>Not found</p>;
  }

  const deleteIcon = () => {
    dispatch(setUpdateNotes(note.id));
    navigate('/');
  };

  return (
    <section className={`single__note ${isDarkTheme && 'single__note-dark'}`}>
      <div
        className="note__wrapper"
        style={{ backgroundColor: `${isDarkTheme && '#0c1829'}` }}
      >
        <h1>{note.title}</h1>
        <p>{note.text}</p>
        <span>{note.date}</span>
        <div className="note__icons">
          <FaArrowLeft onClick={() => navigate('/')} />
          <RiDeleteBin5Fill onClick={deleteIcon} />
        </div>
      </div>
    </section>
  );
}
