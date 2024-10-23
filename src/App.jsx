import { Toaster } from "react-hot-toast";
import NotesList from "./components/NotesList";

function App() {
	return (
		<>
			<NotesList />
			<Toaster position="top-center" />
		</>
	);
}

export default App;
