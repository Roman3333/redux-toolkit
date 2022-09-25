import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toDos: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createToDo: (state, action) => {
      state.toDos.push(action.payload);
    },
    toogleToDo: (state, action) => {
      const toDo = state.toDos.find((toDo) => toDo.id === action.payload);
      toDo.completed = !toDo.completed;
    },
    deleteToDo: (state, action) => {
      state.toDos = state.toDos.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { createToDo, toogleToDo, deleteToDo } = userSlice.actions;
export default userSlice.reducer;
