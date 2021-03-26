import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import Card from "../../components/Card/Card.js";
import { fetchAllPosts } from "../../store/reducers/postsReducer";
import ParticlesBg from "particles-bg";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  const { posts } = useSelector((state) => state.posts);

  return (
    <Fragment>
      <div className={styles.gridContainer}>
        <main className={styles.grid}>
          <ParticlesBg num={20} type="circle" bg={true} />
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return <Card post={post} />;
            })}
        </main>
      </div>
    </Fragment>
  );
};

export default Home;
