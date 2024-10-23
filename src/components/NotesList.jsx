import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Header from "./Header";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

export default function NotesList() {
	const [searchNotes, setSearchNotes] = useState("");
	const [noteTitle, setNoteTitle] = useState("");
	const [noteText, setNoteText] = useState("");
	const [notesLimit, setNotesLimit] = useState(198);
	const [notes, setNotes] = useState([
		{
			id: 1,
			title: "This is my first note",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae iusto dolores recusandae dolorem",
			date: "21/10/2024",
		},
		{
			id: 2,
			title: "Pick up the groceries",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			date: "22/10/2024",
		},
	]);

	const handleCalculateNotesLimit = () => {
		setNotesLimit((prevLimit) => prevLimit - 1);
	};

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
			setNotes((prevNotes) => [
				...prevNotes,
				{
					id: handleIdGenerator(prevNotes),
					title: noteTitle,
					text: noteText,
					date: handleDateGenerator(),
				},
			]);

			setNoteTitle("");
			setNoteText("");
			handleCalculateNotesLimit();
		} else {
			toast.error("Please fill inputs 😏");
		}
	};

	const handleDeleteNote = (id) => {
		setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
		setNotesLimit((prevLimit) => prevLimit + 1);
	};

	const searchedNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchNotes.toLowerCase()),
	);

	return (
		<main className="notes__container">
			<Header />

			<section className="notes__search">
				<input
					type="text"
					autoComplete="off"
					value={searchNotes}
					onChange={(e) => setSearchNotes(e.target.value)}
					placeholder="Type to search..."
					className="notes__search-input"
				/>
				<FaSearch className="notes__search-icon" />
			</section>

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
									onClick={() => handleDeleteNote(note.id)}
									className="notes__list-delicon"
								/>
							</div>
						</div>
					))
				) : (
					<div className="notes__list-card-notfound">
						<h2 className="notes__list-card-notfound-h2">
							Not found this note <br />{" "}
							<span className="notes__list-card-notfound-span">🤷‍♂️</span>
						</h2>
					</div>
				)}

				<div className="notes__add">
					<div>
						<input
							type="text"
							value={noteTitle}
							autoComplete="off"
							placeholder="Title"
							className="notes__add-input"
							onChange={(e) => setNoteTitle(e.target.value)}
						/>
						<textarea
							value={noteText}
							onChange={(e) => setNoteText(e.target.value)}
							placeholder="Type to add a note..."
							className="notes__add-textarea"
						></textarea>
					</div>
					<div className="notes__add-wrap">
						<span className="notes__add-span">{notesLimit} Remaining</span>
						<button onClick={handleAddNote} className="notes__add-btn">
							Save
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}
