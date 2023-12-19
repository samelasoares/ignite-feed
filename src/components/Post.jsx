import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl68uq110yK34MbeoxVrJGy2eVpIjq9Ky4g&usqp=CAU"
          />
          <div className={styles.authorInfo}>
            <strong>Maeve Smith</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="December 18, 2023" dateTime="2023-12-18 14:08:30">
          1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentsForm}>
        <strong>Comments</strong>

        <textarea placeholder="Add a comment..." />

        <footer>
          <button type="submit">Send</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
