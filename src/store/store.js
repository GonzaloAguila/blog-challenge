  
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {postsReducer} from './reducers/postsReducer'

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
      posts: postsReducer,
    },
  });
  
  export default store;