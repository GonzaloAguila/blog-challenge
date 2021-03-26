import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updatePost, fetchOnePost} from "../../store/reducers/postsReducer"
import ParticlesBg from "particles-bg";
import styles from "./styles.module.css";
import Swal from "sweetalert2";

const UpdatePost = ({match}) => {
  const dispatch = useDispatch();
  console.log(fetchOnePost)
  const [error, setError] = useState(true)
  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const { singlePost } = useSelector((state) => state.posts);

  useEffect(()=> {
    dispatch(fetchOnePost(match.params.id))
  }, [])

  const handleChange = (e) => {
    if(input.body.length >= 5 && input.title.length >= 5){
      setError(false)
    } else {
      setError(true)
    }
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updatePost(input)).then(() => {
    //   Swal.fire("Post Actualizado!", "El post fue actualizado correctamente.", "success");
    //   setInput({title: "", body: ""})
    // })
  };

  return (
    <Fragment>
      <div className={styles.formContainer}>
        <ParticlesBg num={20} type="square" bg={true} />
        <h3 className={styles.title}>Actualizar Post</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Title</label>
          <input
            value={input.title}
            placeholder={singlePost.title}
            name="title"
            onChange={handleChange}
            type="text"
            min="5"
            max="20"
          />
          <label>Body</label>
          <textarea
            placeholder={singlePost.body}
            value={input.body}
            name="body"
            onChange={handleChange}
            type="text"
            min="5"
            max="200"
          />
          <button
            disabled={
               error
            }
            type="submit"
            className={styles.btn}
          >
            Actualizar
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default UpdatePost;
