import { createSlice } from '@reduxjs/toolkit';

const initialNotes = [
  {
    id: 1,
    title: 'Firstly, using my Notes app',
    text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quaerat minus saepe.',
    date: 'November 3',
  },
  {
    id: 2,
    title: 'Pick up the groceries',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    date: 'November 5',
  },
];

const loadNotesFromStorage = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    return JSON.parse(savedNotes);
  } else {
    localStorage.setItem('notes', JSON.stringify(initialNotes));
    return initialNotes;
  }
};

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark';
};

const initialState = {
  notes: loadNotesFromStorage(),
  isDarkTheme: getInitialTheme(),
  isOpenModal: false,
  searchNotes: '',
};

export const globalSlices = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem('theme', state.isDarkTheme ? 'dark' : 'light');
    },

    setNotes: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },

    setUpdateNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },

    setIsOpenModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },

    setSearchNotes: (state, action) => {
      state.searchNotes = action.payload;
    },
  },
});

export const {
  setNotes,
  setUpdateNotes,
  setIsOpenModal,
  setSearchNotes,
  toggleTheme,
} = globalSlices.actions;
