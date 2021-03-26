import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { fetchOnePost } from "../../store/reducers/postsReducer";
import ParticlesBg from "particles-bg";

const SinglePost = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOnePost(match.params.id));
  }, []);

  const { singlePost } = useSelector((state) => state.posts);
  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <ParticlesBg num={5} type="fountain" bg={true} />
        <div className={styles.postContainer}>
          <h3>{singlePost.id}</h3>
          <h2>{singlePost.title}</h2>
          <p>{singlePost.body}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default SinglePost;
