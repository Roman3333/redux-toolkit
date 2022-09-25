import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  },
);

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled]: () => console.log('fulfilled'),
    [fetchPosts.pending]: () => console.log('pending'),
    [fetchPosts.rejected]: () => console.log('rejected'),
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
