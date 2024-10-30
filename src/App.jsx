import { Toaster } from 'react-hot-toast';
import NotesList from './components/NotesList';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotesList />} />
        </Routes>
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
