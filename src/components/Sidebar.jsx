import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl68uq110yK34MbeoxVrJGy2eVpIjq9Ky4g&usqp=CAU" />

        <strong>Maeve Smith</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={30} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
