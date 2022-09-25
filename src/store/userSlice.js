import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    createLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { createFirstName, createLastName } = userSlice.actions;
export default userSlice.reducer;
