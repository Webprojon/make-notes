import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes';
import Note from './components/Note';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
