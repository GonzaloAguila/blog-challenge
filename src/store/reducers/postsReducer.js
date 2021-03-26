import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_POSTS,
  FETCH_ONE_POST,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST,
} from "../constants";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllPosts = createAsyncThunk(FETCH_POSTS, () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
});

export const fetchOnePost = createAsyncThunk(FETCH_ONE_POST, (id) => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res) => res.data);
});

export const createPost = createAsyncThunk(CREATE_POST, (input) => {
  return axios
    .post(`https://jsonplaceholder.typicode.com/posts`, input)
    .then((res) => res.data);
});

export const deletePost = createAsyncThunk(DELETE_POST, (id) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(() => id);
});

export const updatePost = createAsyncThunk(UPDATE_POST, (newPostContent) => {
  return axios
    .put(`https://jsonplaceholder.typicode.com/posts/${newPostContent.id}`, {
      title: newPostContent.title,
      body: newPostContent.body,
    })
    .then((res) => res.data);
});

const initialState = {
  posts: [],
  singlePost: {},
};

export const postsReducer = createReducer(initialState, {
  [fetchAllPosts.fulfilled]: (state, action) => {
    return { ...state, posts: action.payload.filter((post) => post.id <= 15) };
  },
  [fetchOnePost.fulfilled]: (state, action) => {
    return { ...state, singlePost: action.payload };
  },
  [deletePost.fulfilled]: (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id != action.payload),
    };
  },
  [createPost.fulfilled]: (state, action) => {
    console.log(action.payload);
    return { ...state, posts: [...state.posts, action.payload] };
  },
  [updatePost.fulfilled]: (state, action) => {
    return {
      ...state,
      posts: state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return action.payload;
        }
        return post;
      }),
    };
  },
});
