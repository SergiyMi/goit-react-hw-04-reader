import React from 'react';

import styles from './Publication.module.css';

const Publication = ({ id, title, text, items, pageNumber }) => {
  let it = items.find((item, index) => index === Number(pageNumber - 1));
  return (
    <article className={styles.publication}>
      <h2>{it.title}</h2>
      <p>{it.text}</p>
    </article>
  );
};

export default Publication;
