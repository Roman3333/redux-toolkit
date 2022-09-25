import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../store/postsSlice';

import PostItem from './PostItem';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsSlice.posts);
  console.log(posts);
  return (
    <div>
      <button
        onClick={() => dispatch(fetchPosts())}
        type="submit"
        className="bg-lime-300  hover:bg-lime-400 transition-all p-2 text-sm">
        Get posts
      </button>
      {posts.map((post) => {
        console.log(post);
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
