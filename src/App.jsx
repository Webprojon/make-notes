import { Toaster } from "react-hot-toast";
import NotesList from "./components/NotesList";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<NotesList />
				<Toaster position="top-center" />
			</Provider>
		</>
	);
}

export default App;
