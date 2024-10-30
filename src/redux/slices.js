import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    {
      id: 1,
      title: 'This is my first note',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae iusto dolores recusandae dolorem',
      date: '21/10/2024',
    },
    {
      id: 2,
      title: 'Pick up the groceries',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      date: '22/10/2024',
    },
  ],
  isOpenModal: false,
  searchNotes: '',
};

export const globalSlices = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes.push(action.payload);
    },

    setUpdateNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
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
