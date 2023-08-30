import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { INoteState } from './types/NoteState';
import type INote from '../../services/NoteService/types/Note';
import * as NoteService from '../../services/NoteService';

const initialState: INoteState = {
  recentNotes: [],
};

export const getCurrentNote = createAsyncThunk(
  'note/getCurrentNote',
  NoteService.getCurrentNote,
);

export const storeNote = createAsyncThunk(
  'note/storeNote',
  NoteService.storeNote,
);

export const destroyNote = createAsyncThunk(
  'note/destroyNote',
  NoteService.destroyNote,
);

export const getAllNotes = createAsyncThunk(
  'note/getAllNotes',
  NoteService.getAllNotes,
);

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    resetToDefault: () => initialState,
    setCurrentNote: (state, action: PayloadAction<INote>) => {
      state.currentNote = action.payload;
    },
    setPastNote: (state, action: PayloadAction<INote>) => {
      state.pastNote = action.payload;
    },
    resetPastNote: (state) => {
      state.pastNote = initialState.pastNote;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getCurrentNote.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getCurrentNote.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCurrentNote.fulfilled, (state, action) => {
        state.currentNote = action.payload;
      })
      .addCase(getAllNotes.pending, (state) => {
        state.error = undefined;
      })
      .addCase(getAllNotes.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllNotes.fulfilled, (state, action) => {
        state.recentNotes = action.payload;
      })
      .addCase(storeNote.pending, (state) => {
        state.error = undefined;
      })
      .addCase(storeNote.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(storeNote.fulfilled, (state, action) => {
        state.currentNote = action.payload;
      })
      .addCase(destroyNote.pending, (state) => {
        state.error = undefined;
      })
      .addCase(destroyNote.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(destroyNote.fulfilled, (state, action) => {
        const removedNote = action.payload;
        const removedIndex = state.recentNotes.findIndex(({ date }) => removedNote.date === date);
        state.recentNotes.splice(removedIndex, 1);
      });
  },
});

export const {
  resetToDefault,
  setCurrentNote,
  setPastNote,
  resetPastNote,
} = noteSlice.actions;

export default noteSlice.reducer;