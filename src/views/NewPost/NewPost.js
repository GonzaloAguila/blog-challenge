import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createPost} from "../../store/reducers/postsReducer"
import ParticlesBg from "particles-bg";
import styles from "./styles.module.css";
import Swal from "sweetalert2";

const NewPost = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState(true)
  const [input, setInput] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    if(input.body.length >= 5 && input.title.length >= 5){
      setError(false)
    } else {
      setError(true)
    }
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log(error, input)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(input)).then(() => {
      Swal.fire("Post Creado!", "El post fue creado correctamente.", "success");
      setInput({title: "", body: ""})
    })
  };

  return (
    <Fragment>
      <div className={styles.formContainer}>
        <ParticlesBg num={20} type="square" bg={true} />
        <h3 className={styles.title}>Nuevo Post</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Title</label>
          <input
            value={input.title}
            name="title"
            onChange={handleChange}
            type="text"
            min="5"
            max="20"
          />
          <label>Body</label>
          <textarea
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
            Crear Post
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default NewPost;
