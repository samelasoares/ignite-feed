import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl68uq110yK34MbeoxVrJGy2eVpIjq9Ky4g&usqp=CAU"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Maeve Smith</strong>
              <time title="December 18, 2023" dateTime="2023-12-18 14:08:30">
                20 minutes ago
              </time>
            </div>

            <button title="Delete">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
