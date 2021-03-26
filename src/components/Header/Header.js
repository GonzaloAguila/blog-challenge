import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const Header = ({ generateImage }) => {
  const [image, setImage] = useState("");
  const [theme, setTheme] = useState("light");

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  useEffect(() => {
    setImage(generateImage());
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
    return () => setImage(generateImage());
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.img} src={image} alt="header_image"></img>
      <ul className={styles.navUl}>
        <Link className={styles.link} to="/blog-challenge">
          <li className={styles.navLiOne}>Home</li>
        </Link>
        <Link className={styles.link} to={"/blog-challenge/newPost"}>
          <li className={styles.navLiTwo}>Formulario De Creación</li>
        </Link>
        <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness4Icon></Brightness4Icon>
        </button>
      </ul>
    </div>
  );
};

export default Header;
