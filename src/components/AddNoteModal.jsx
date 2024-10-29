import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenModal, setNotes } from "../redux/slices";

export default function AddNoteModal() {
	const dispatch = useDispatch();
	const [noteTitle, setNoteTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const { notes } = useSelector((state) => state.global);

	const handleDateGenerator = () => {
		const today = new Date();
		return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
	};

	const handleIdGenerator = (prevNotes) => {
		if (prevNotes.length === 0) return 1;
		const maxId = Math.max(...prevNotes.map((note) => note.id));
		return maxId + 1;
	};

	const handleAddNote = () => {
		if (noteTitle && noteText !== "") {
			dispatch(
				setNotes({
					id: handleIdGenerator(notes),
					title: noteTitle,
					text: noteText,
					date: handleDateGenerator(),
				}),
			);

			setNoteTitle("");
			setNoteText("");
			dispatch(setIsOpenModal());
		} else {
			toast.error("Please fill inputs 😏");
		}
	};

	return (
		<section className="modal">
			<div>
				<input
					type="text"
					value={noteTitle}
					autoComplete="off"
					placeholder="Title"
					className="modal__add-input"
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
				<textarea
					value={noteText}
					onChange={(e) => setNoteText(e.target.value)}
					placeholder="Start writing..."
					className="modal__add-textarea"
				></textarea>
			</div>
			<div className="modal__add-wrap">
				<button
					onClick={() => dispatch(setIsOpenModal())}
					className="modal__add-btn"
				>
					Cancel
				</button>
				<button onClick={handleAddNote} className="modal__add-btn">
					Save
				</button>
			</div>
		</section>
	);
}
