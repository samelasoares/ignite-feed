import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Dory Smith"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto molestiae odit inventore reprehenderit est veritatis iste sed at! Laudantium quisquam labore odit deserunt soluta ut corporis. Sit, fuga quis!"
          />
          <Post author="Richard Pierre" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
