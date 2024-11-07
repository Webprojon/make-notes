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

// localStorage'dan notes-ni olish funksiyasi yoki boshlang'ich qiymatni saqlash
const loadNotesFromStorage = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    return JSON.parse(savedNotes);
  } else {
    localStorage.setItem('notes', JSON.stringify(initialNotes));
    return initialNotes;
  }
};

const initialState = {
  notes: loadNotesFromStorage(),
  isOpenModal: false,
  searchNotes: '',
};

export const globalSlices = createSlice({
  name: 'global',
  initialState,
  reducers: {
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

export const { setNotes, setUpdateNotes, setIsOpenModal, setSearchNotes } =
  globalSlices.actions;

//import { createSlice } from '@reduxjs/toolkit';

//const initialState = {
//  notes: [
//    {
//      id: 1,
//      title: 'This is my first note',
//      text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, quaerat minus saepe.',
//      date: 'October 30',
//    },
//    {
//      id: 2,
//      title: 'Pick up the groceries',
//      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//      date: 'November 4',
//    },
//  ],
//  isOpenModal: false,
//  searchNotes: '',
//};

//export const globalSlices = createSlice({
//  name: 'global',
//  initialState,
//  reducers: {
//    setNotes: (state, action) => {
//      state.notes.push(action.payload);
//    },

//    setUpdateNotes: (state, action) => {
//      state.notes = state.notes.filter((note) => note.id !== action.payload);
//    },

//    setIsOpenModal: (state) => {
//      state.isOpenModal = !state.isOpenModal;
//    },

//    setSearchNotes: (state, action) => {
//      state.searchNotes = action.payload;
//    },
//  },
//});

//export const { setNotes, setUpdateNotes, setIsOpenModal, setSearchNotes } =
//  globalSlices.actions;
