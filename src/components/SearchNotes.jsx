import { FaSearch } from "react-icons/fa";

export default function SearchNotes() {
	return (
		<section className="notes__search">
			<input
				type="text"
				autoComplete="off"
				placeholder="Type to search..."
				className="notes__search-input"
			/>
			<FaSearch className="notes__search-icon" />
		</section>
	);
}
