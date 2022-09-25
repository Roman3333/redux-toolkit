import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';
import toDosSlice from './toDosSlice';
import postsSlice from './postsSlice';

const store = configureStore({
  reducer: {
    userSlice,
    toDosSlice,
    postsSlice,
  },
});

export default store;
