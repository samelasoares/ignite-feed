import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSl0vtnC42Hg1DKKAUrI1FMlaaptFFmG7SA&usqp=CAU",
      name: "Matt Flam",
      role: "Educator",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
      { type: "link", content: "👉jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-12-18 19:08:02"),
  },
  {
    id: 2,
    author: {
      avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5XVEhzPoeYsMIP2sPHxnP5rxrVgj0MlFC_Q&usqp=CAU",
      name: "Jenna Rink",
      role: "Web Disigner",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",},
      { type: "link", content: "👉jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-12-19 09:08:02"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post 
                 key={post.id}
                 author={post.author}
                 content={post.content}
                 publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
