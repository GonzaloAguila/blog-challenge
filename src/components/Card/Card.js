import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/reducers/postsReducer";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import Swal from "sweetalert2";

export const Card = ({ post }) => {
  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estás a punto de elimiar el post con id: ${id}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePost(id));
        Swal.fire(
          "Post borrado!",
          "El post fue borrado correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <article className={styles.article} key={post.id}>
      <div className={styles.text}>
        <Link className={styles.link} to={`/blog-challenge/posts/${post.id}`}>
          <h3>{post.title}</h3>
        </Link>
        <div className={styles.btnContainer}>
          <Link className={styles.link} to={`/blog-challenge/updatePost/${post.id}`}>
            <EditFilled className={styles.btnUpdate} />
          </Link>
          <DeleteFilled
            className={styles.btnDelete}
            onClick={(e) => handleDelete(e, post.id)}
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
