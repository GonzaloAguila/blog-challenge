import React from "react";
import ReactDOM from "react-dom";
import Home from "./views/Home/Home";
import Header from "./components/Header/Header";
import SinglePost from "./views/SinglePost/SinglePost";
import NewPost from "./views/NewPost/NewPost";
import UpdatePost from "./views/UpdatePost/UpdatePost"
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import globalStyles from "./global.styles.module.css";
import store from "./store/store";
import generateImage from "./utils/generateImage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header generateImage={generateImage} />
      <Route exact path="/blog-challenge" component={Home} />
      <Route exact path="/blog-challenge/newPost" component={NewPost} />
      <Route exact path="/blog-challenge/updatePost/:id" component={UpdatePost} />
      <Route exact path="/blog-challenge/posts/:id" component={SinglePost} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
