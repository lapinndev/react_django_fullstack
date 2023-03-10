import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss';

export const App = () => {
  const [posts, setPosts] = useState<{ title: string; channel: string }[]>([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/').then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <ul className={styles.posts}>
      {posts &&
        posts.map((el, index) => {
          return (
            <li key={index} className={styles.post}>
              <h2 className={styles.title}>{el.title}</h2>
              <p className={styles.text}>{el.channel}</p>
            </li>
          );
        })}
    </ul>
  );
};
