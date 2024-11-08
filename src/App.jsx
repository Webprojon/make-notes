import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Notes from './components/Notes';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Notes />} />
        </Routes>
        <Toaster position="top-center" />
      </Provider>
    </>
  );
}

export default App;
